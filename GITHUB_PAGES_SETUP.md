# GitHub Pages Setup Guide

## Issue: .well-known Directory Not Accessible

The `.well-known` directory is currently returning a 404 error. This guide helps resolve this issue.

## Required Steps

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/petems/petems.github.io
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 2. Verify Configuration Files

The following files have been added to ensure proper serving:

- **`.nojekyll`** - Tells GitHub Pages not to process with Jekyll
- **`.well-known/test.txt`** - Test file to verify directory access
- **`verify-well-known.html`** - Verification page for testing
- **`.github/workflows/deploy-static.yml`** - Automated deployment workflow

### 3. Test the Setup

After enabling GitHub Pages and pushing changes, test the following URLs:

- **Main site**: https://petems.github.io
- **Test file**: https://petems.github.io/.well-known/test.txt
- **Microsoft Identity**: https://petems.github.io/.well-known/microsoft-identity-association.json
- **Verification page**: https://petems.github.io/verify-well-known.html

### 4. Expected Results

If properly configured, you should see:
- ✅ Main website loads correctly
- ✅ `.well-known/test.txt` returns the test content
- ✅ `.well-known/microsoft-identity-association.json` returns the JSON data
- ✅ No 404 errors for `.well-known` files
- ✅ Automated deployment on every push to master

### 5. Deployment Workflow

The repository now includes an automated deployment workflow:

- **Trigger**: Automatically runs on every push to `master` branch
- **Build**: Creates a static site build with all necessary files
- **Deploy**: Automatically deploys to GitHub Pages
- **Features**: 
  - Includes `.well-known` directory
  - Generates `robots.txt` and `sitemap.xml`
  - Preserves `.nojekyll` file
  - Handles all static assets

### 6. Troubleshooting

If you still get 404 errors:

1. **Check GitHub Pages source**: Ensure it's set to "GitHub Actions"
2. **Check workflow runs**: Verify the deployment workflow is running
3. **Wait for deployment**: GitHub Pages can take a few minutes to deploy
4. **Clear cache**: Try accessing the URLs in an incognito window
5. **Check file permissions**: Ensure all files are committed and pushed

### 7. Alternative Solutions

If the issue persists, consider:

1. **Using a custom domain**: Add a CNAME file if you have a custom domain
2. **Checking repository settings**: Ensure the repository is public
3. **Contacting GitHub support**: If the issue continues

## Current Status

- ✅ `.nojekyll` file added
- ✅ Test files created
- ✅ Verification page created
- ✅ GitHub Actions workflows updated for master branch
- ✅ Website updated with Pete Souter's information
- ✅ Automated deployment workflow added
- ⏳ GitHub Pages needs to be enabled in repository settings

## Next Steps

1. Enable GitHub Pages in repository settings (select **GitHub Actions**)
2. Push changes to trigger the deployment workflow
3. Wait for deployment (usually 2-5 minutes)
4. Test the URLs listed above
5. Remove test files once confirmed working
6. Update website content with Pete Souter's actual information from his GitHub profile

## Branch Configuration

- **Default branch**: `master`
- **GitHub Pages source**: GitHub Actions
- **GitHub Actions**: Configured for `master` branch
- **Deployment**: Automated via workflow

## Content Updates Needed

The website currently contains placeholder content. To make it more accurate, please update the following sections in `index.html` with information from Pete Souter's GitHub profile:

1. **About section** - Update with actual bio and background
2. **Skills section** - Add actual technologies and skills
3. **Experience section** - Update with real work experience
4. **Projects section** - Add actual GitHub repositories and projects
5. **Contact section** - Update with correct contact information

## GitHub Actions Workflows

Two main workflows are configured:

1. **`validate.yml`** - Comprehensive content validation with Node.js 20
   - HTML, CSS, JavaScript, and Markdown validation
   - File structure and accessibility checks
   - Broken link detection
   - File size analysis

2. **`deploy-static.yml`** - Automated deployment to GitHub Pages
   - Static site build and deployment
   - Proper handling of `.well-known` directory
   - SEO files generation (robots.txt, sitemap.xml)
   - Modern GitHub Pages deployment method

3. **`auto-pr.yml`** - Automatic pull request creation for content changes
   - Creates PRs when content files are modified
   - Adds review checklist and labels
   - Provides preview links