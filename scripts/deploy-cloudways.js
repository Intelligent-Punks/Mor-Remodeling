import { execSync } from 'child_process'
import { existsSync, cpSync, rmSync, writeFileSync } from 'fs'
import { join } from 'path'

const DEPLOY_BRANCH = 'production'
const DIST_DIR = 'dist'
const CURRENT_BRANCH = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim()

console.log(`Current branch: ${CURRENT_BRANCH}`)
console.log(`Deploy branch: ${DEPLOY_BRANCH}`)

// Build project
console.log('\n📦 Building project...')
execSync('npm run build', { stdio: 'inherit' })

if (!existsSync(DIST_DIR)) {
  console.error(`❌ Build failed: ${DIST_DIR} directory not found`)
  process.exit(1)
}

// Check if deploy branch exists
const branchExists = execSync('git branch --list ' + DEPLOY_BRANCH, { encoding: 'utf-8' }).trim()

if (branchExists) {
  console.log(`\n📂 Switching to ${DEPLOY_BRANCH} branch...`)
  execSync(`git checkout ${DEPLOY_BRANCH}`)
  
  // Remove all files except .git
  console.log('\n🧹 Cleaning old files...')
  try {
    const files = execSync('git ls-files', { encoding: 'utf-8' }).trim().split('\n')
    files.forEach(file => {
      if (file && !file.startsWith('.git')) {
        try {
          rmSync(file, { recursive: true, force: true })
        } catch (e) {
          // Ignore errors
        }
      }
    })
  } catch (e) {
    // Ignore if no files
  }
} else {
  console.log(`\n📂 Creating ${DEPLOY_BRANCH} branch...`)
  execSync(`git checkout --orphan ${DEPLOY_BRANCH}`)
  execSync('git rm -rf . --quiet || true')
}

// Copy dist contents to root
console.log('\n📋 Copying build files...')
const filesToCopy = ['index.html', 'assets', 'images', 'icons', 'fonts']
filesToCopy.forEach(item => {
  const src = join(DIST_DIR, item)
  const dest = item
  if (existsSync(src)) {
    cpSync(src, dest, { recursive: true })
    console.log(`  ✓ Copied ${item}`)
  }
})

// Create .htaccess for SPA routing
console.log('\n📝 Creating .htaccess...')
const htaccessContent = `# Enable Rewrite Engine
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
`
writeFileSync('.htaccess', htaccessContent)
console.log('  ✓ Created .htaccess')

// Stage only the files we need
console.log('\n📤 Staging files...')
const filesToStage = ['index.html', 'assets', 'images', 'icons', 'fonts', '.htaccess']
filesToStage.forEach(file => {
  if (existsSync(file)) {
    execSync(`git add ${file}`)
    console.log(`  ✓ Staged ${file}`)
  }
})

// Check if there are changes
const status = execSync('git status --porcelain', { encoding: 'utf-8' })
if (!status.trim()) {
  console.log('\n⚠️  No changes to commit')
  execSync(`git checkout ${CURRENT_BRANCH}`)
  process.exit(0)
}

// Commit
const commitMessage = `Deploy: ${new Date().toISOString()}`
console.log(`\n💾 Committing changes...`)
execSync(`git commit -m "${commitMessage}"`)

// Push
console.log(`\n🚀 Pushing to ${DEPLOY_BRANCH} branch...`)
execSync(`git push origin ${DEPLOY_BRANCH} --force`)

// Return to original branch
console.log(`\n↩️  Returning to ${CURRENT_BRANCH} branch...`)
execSync(`git checkout ${CURRENT_BRANCH}`)

console.log('\n✅ Deployment complete!')
console.log(`\nNext steps:`)
console.log(`1. In Cloudways, set deployment branch to: ${DEPLOY_BRANCH}`)
console.log(`2. Set document root to: /public_html (or your domain root)`)
console.log(`3. Enable auto-deploy on push (optional)`)

