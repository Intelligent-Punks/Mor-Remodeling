# PowerShell script for Cloudways deployment
$DEPLOY_BRANCH = "production"
$DIST_DIR = "dist"
$CURRENT_BRANCH = git rev-parse --abbrev-ref HEAD

Write-Host "Current branch: $CURRENT_BRANCH" -ForegroundColor Cyan
Write-Host "Deploy branch: $DEPLOY_BRANCH" -ForegroundColor Cyan

# Build project
Write-Host "`n📦 Building project..." -ForegroundColor Yellow
npm run build

if (-not (Test-Path $DIST_DIR)) {
    Write-Host "❌ Build failed: $DIST_DIR directory not found" -ForegroundColor Red
    exit 1
}

# Check if deploy branch exists
$branchExists = git branch --list $DEPLOY_BRANCH

if ($branchExists) {
    Write-Host "`n📂 Switching to $DEPLOY_BRANCH branch..." -ForegroundColor Yellow
    git checkout $DEPLOY_BRANCH
    
    # Remove all files except .git
    Write-Host "`n🧹 Cleaning old files..." -ForegroundColor Yellow
    git ls-files | ForEach-Object {
        if ($_ -ne ".git") {
            Remove-Item $_ -Recurse -Force -ErrorAction SilentlyContinue
        }
    }
} else {
    Write-Host "`n📂 Creating $DEPLOY_BRANCH branch..." -ForegroundColor Yellow
    git checkout --orphan $DEPLOY_BRANCH
    git rm -rf . --quiet 2>$null
}

# Copy dist contents to root
Write-Host "`n📋 Copying build files..." -ForegroundColor Yellow
$filesToCopy = @("index.html", "assets", "images", "icons", "fonts")
foreach ($item in $filesToCopy) {
    $src = Join-Path $DIST_DIR $item
    $dest = $item
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dest -Recurse -Force
        Write-Host "  ✓ Copied $item" -ForegroundColor Green
    }
}

# Create .htaccess for SPA routing
Write-Host "`n📝 Creating .htaccess..." -ForegroundColor Yellow
$htaccessContent = @"
# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Handle Angular and React Router
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l

  # Rewrite everything else to index.html
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
"@
Set-Content -Path ".htaccess" -Value $htaccessContent
Write-Host "  ✓ Created .htaccess" -ForegroundColor Green

# Stage only the files we need
Write-Host "`n📤 Staging files..." -ForegroundColor Yellow
$filesToStage = @("index.html", "assets", "images", "icons", "fonts", ".htaccess")
foreach ($file in $filesToStage) {
    if (Test-Path $file) {
        git add $file
        Write-Host "  ✓ Staged $file" -ForegroundColor Green
    }
}

# Check if there are changes
$status = git status --porcelain
if (-not $status) {
    Write-Host "`n⚠️  No changes to commit" -ForegroundColor Yellow
    git checkout $CURRENT_BRANCH
    exit 0
}

# Commit
$commitMessage = "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
Write-Host "`n💾 Committing changes..." -ForegroundColor Yellow
git commit -m $commitMessage

# Push
Write-Host "`n🚀 Pushing to $DEPLOY_BRANCH branch..." -ForegroundColor Yellow
git push origin $DEPLOY_BRANCH --force

# Return to original branch
Write-Host "`n↩️  Returning to $CURRENT_BRANCH branch..." -ForegroundColor Yellow
git checkout $CURRENT_BRANCH

Write-Host "`n✅ Deployment complete!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. In Cloudways, set deployment branch to: $DEPLOY_BRANCH"
Write-Host "2. Set document root to: /public_html (or your domain root)"
Write-Host "3. Enable auto-deploy on push (optional)"

