#!/bin/bash

echo "🚀 Hummingbot Dashboard - GitHub Upload Script"
echo "=============================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the hummingbot-dashboard directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

echo "📋 Current project status:"
echo "- Project: Hummingbot Dashboard"
echo "- Framework: Next.js 15 + TypeScript"
echo "- Features: Bots, Portfolio, Connectors, Settings"
echo "- Architecture: Feature-based modules with 3-file components"
echo ""

# Show current git status
echo "📊 Git Status:"
git status --porcelain
echo ""

# Get GitHub username
echo "👤 Please enter your GitHub username:"
read -p "GitHub Username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

echo ""
echo "🔧 Setting up repository..."

# Add remote origin
REPO_URL="https://github.com/$GITHUB_USERNAME/hummingbot-dashboard.git"
git remote add origin $REPO_URL 2>/dev/null || git remote set-url origin $REPO_URL

# Ensure we're on main branch
git branch -M main

echo "✅ Remote repository configured: $REPO_URL"
echo ""

echo "📤 Pushing to GitHub..."
echo "Note: You may be prompted for your GitHub credentials"
echo ""

# Push to GitHub
if git push -u origin main; then
    echo ""
    echo "🎉 SUCCESS! Your Hummingbot Dashboard is now on GitHub!"
    echo ""
    echo "📍 Repository URL:"
    echo "   https://github.com/$GITHUB_USERNAME/hummingbot-dashboard"
    echo ""
    echo "🌐 You can also deploy it instantly:"
    echo "   - Vercel: https://vercel.com/import/git"
    echo "   - Netlify: https://app.netlify.com/start"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Visit your repository on GitHub"
    echo "   2. Add a description and topics"
    echo "   3. Enable GitHub Pages or deploy to Vercel"
    echo "   4. Star the repository ⭐"
else
    echo ""
    echo "❌ Upload failed. This might be because:"
    echo "   1. Repository doesn't exist on GitHub yet"
    echo "   2. Authentication failed"
    echo "   3. Network issues"
    echo ""
    echo "📋 Manual steps:"
    echo "   1. Go to https://github.com/new"
    echo "   2. Create repository: hummingbot-dashboard"
    echo "   3. Don't initialize with README/gitignore"
    echo "   4. Run: git push -u origin main"
fi
