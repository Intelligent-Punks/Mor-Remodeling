import { execSync } from 'child_process'
import { existsSync, cpSync, rmSync, writeFileSync, readdirSync, statSync } from 'fs'
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
let branchExists = false
try {
  execSync(`git rev-parse --verify ${DEPLOY_BRANCH}`, { stdio: 'ignore', encoding: 'utf-8' })
  branchExists = true
} catch (e) {
  branchExists = false
}

if (branchExists) {
  console.log(`\n📂 Switching to ${DEPLOY_BRANCH} branch...`)
  try {
    execSync(`git checkout ${DEPLOY_BRANCH}`, { stdio: 'inherit' })
  } catch (e) {
    console.error(`❌ Failed to checkout ${DEPLOY_BRANCH} branch. Please commit or stash your changes first.`)
    process.exit(1)
  }
  
  // Remove all files from git index and working directory
  console.log('\n🧹 Cleaning old files...')
  try {
    execSync('git rm -rf . --quiet', { stdio: 'ignore' })
  } catch (e) {
    // Ignore if no files to remove
  }
  // Also remove untracked files
  try {
    execSync('git clean -fd --quiet', { stdio: 'ignore' })
  } catch (e) {
    // Ignore errors
  }
} else {
  console.log(`\n📂 Creating ${DEPLOY_BRANCH} branch...`)
  try {
    execSync(`git checkout --orphan ${DEPLOY_BRANCH}`, { stdio: 'inherit' })
  } catch (e) {
    console.error(`❌ Failed to create ${DEPLOY_BRANCH} branch. Please commit or stash your changes first.`)
    process.exit(1)
  }
  try {
    execSync('git rm -rf . --quiet', { stdio: 'ignore' })
  } catch (e) {
    // Ignore if no files to remove
  }
}

// Copy dist contents to root
console.log('\n📋 Copying build files...')
function copyDistContents(srcDir, destDir) {
  if (!existsSync(srcDir)) {
    return
  }
  const items = readdirSync(srcDir)
  items.forEach(item => {
    // Skip .git directory
    if (item === '.git') {
      return
    }
    const src = join(srcDir, item)
    const dest = join(destDir, item)
    const stat = statSync(src)
    if (stat.isDirectory()) {
      cpSync(src, dest, { recursive: true })
      console.log(`  ✓ Copied directory: ${item}`)
    } else {
      cpSync(src, dest)
      console.log(`  ✓ Copied file: ${item}`)
    }
  })
}
copyDistContents(DIST_DIR, '.')

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

// Stage all files (except .git)
console.log('\n📤 Staging files...')
execSync('git add -f .', { stdio: 'inherit' })
console.log('  ✓ Staged all files')

// Check if there are changes
const status = execSync('git status --porcelain', { encoding: 'utf-8' })
if (!status.trim()) {
  console.log('\n⚠️  No changes to commit')
  try {
    execSync(`git checkout ${CURRENT_BRANCH}`, { stdio: 'inherit' })
  } catch (e) {
    console.error(`❌ Failed to return to ${CURRENT_BRANCH} branch. Please switch manually.`)
  }
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
try {
  execSync(`git checkout ${CURRENT_BRANCH}`, { stdio: 'inherit' })
} catch (e) {
  console.error(`❌ Failed to return to ${CURRENT_BRANCH} branch. Please switch manually.`)
  process.exit(1)
}

console.log('\n✅ Deployment complete!')
console.log(`\nNext steps:`)
console.log(`1. In Cloudways, set deployment branch to: ${DEPLOY_BRANCH}`)
console.log(`2. Set document root to: /public_html (or your domain root)`)
console.log(`3. Enable auto-deploy on push (optional)`)

