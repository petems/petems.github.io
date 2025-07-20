# GitHub Pages Setup Guide

## Issue: .well-known Directory Not Accessible

The `.well-known` directory is currently returning a 404 error. This guide helps resolve this issue.

## Required Steps

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/petems/petems.github.io
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **master** branch (your default branch)
6. Click **Save**

### 2. Verify Configuration Files

The following files have been added to ensure proper serving:

- **`.nojekyll`** - Tells GitHub Pages not to process with Jekyll
- **`.well-known/test.txt`** - Test file to verify directory access
- **`verify-well-known.html`** - Verification page for testing

### 3. Test the Setup

After enabling GitHub Pages, test the following URLs:

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

### 5. Troubleshooting

If you still get 404 errors:

1. **Check branch name**: Ensure GitHub Pages is configured for the **master** branch
2. **Wait for deployment**: GitHub Pages can take a few minutes to deploy
3. **Clear cache**: Try accessing the URLs in an incognito window
4. **Check file permissions**: Ensure all files are committed and pushed

### 6. Alternative Solutions

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
- ⏳ GitHub Pages needs to be enabled in repository settings

## Next Steps

1. Enable GitHub Pages in repository settings (select **master** branch)
2. Wait for deployment (usually 2-5 minutes)
3. Test the URLs listed above
4. Remove test files once confirmed working
5. Update website content with Pete Souter's actual information from his GitHub profile

## Branch Configuration

- **Default branch**: `master`
- **GitHub Pages source**: `master` branch
- **GitHub Actions**: Configured for `master` branch

## Content Updates Needed

The website currently contains placeholder content. To make it more accurate, please update the following sections in `index.html` with information from Pete Souter's GitHub profile:

1. **About section** - Update with actual bio and background
2. **Skills section** - Add actual technologies and skills
3. **Experience section** - Update with real work experience
4. **Projects section** - Add actual GitHub repositories and projects
5. **Contact section** - Update with correct contact information