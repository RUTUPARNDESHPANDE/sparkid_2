# Environment Variables Setup Guide

This project uses environment variables to securely store Google Sheets web app URLs. This ensures sensitive URLs are not hardcoded in the source code.

## Quick Setup

1. **Create a `.env` file** in the root directory (same level as `package.json`)

2. **Copy the following content** into your `.env` file and replace with your actual URLs:
   ```env
   REACT_APP_GOOGLE_SHEETS_CONTACT_FORM=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   REACT_APP_GOOGLE_SHEETS_QUESTION_FORM=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   REACT_APP_GOOGLE_SHEETS_JOB_APPLICATION=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

   **Or use the template file:** Copy `env.example` to `.env` and update the URLs.

3. **Restart your development server** after creating/updating `.env`:
   ```bash
   npm start
   ```

## Environment Variables

| Variable Name | Description |
|--------------|-------------|
| `REACT_APP_GOOGLE_SHEETS_CONTACT_FORM` | Google Apps Script web app URL for contact form submissions |
| `REACT_APP_GOOGLE_SHEETS_QUESTION_FORM` | Google Apps Script web app URL for question/phone number form |
| `REACT_APP_GOOGLE_SHEETS_JOB_APPLICATION` | Google Apps Script web app URL for job application form (with file upload) |

**Important:** All environment variables in Create React App must start with `REACT_APP_` to be accessible in the browser.

## For Production/Hosting

When deploying to a hosting platform, you need to set these environment variables in your hosting platform's settings:

### GitHub Pages (via GitHub Actions)
Add secrets in GitHub repository settings:
- Go to Settings → Secrets and variables → Actions
- Add each variable as a repository secret
- Update your GitHub Actions workflow to use these secrets

### Netlify
1. Go to Site settings → Environment variables
2. Add each variable with its value
3. Redeploy your site

### Vercel
1. Go to Project settings → Environment Variables
2. Add each variable for Production, Preview, and Development
3. Redeploy your site

### Other Platforms
Most hosting platforms support environment variables. Check your platform's documentation for how to set them.

## Security Notes

- ✅ `.env` file is already in `.gitignore` - it will NOT be committed to Git
- ✅ Never commit `.env` files to version control
- ✅ Use `.env.example` as a template (this file CAN be committed)
- ✅ For production, always set environment variables in your hosting platform
- ⚠️ These URLs are public web app endpoints, but still keep them secure

## Troubleshooting

### Variables not working?
1. Make sure variable names start with `REACT_APP_`
2. Restart your development server after changing `.env`
3. Check that `.env` file is in the root directory (same level as `package.json`)
4. Verify there are no typos in variable names

### Production build not using variables?
- Environment variables are embedded at build time
- Make sure to set them in your hosting platform before building
- Rebuild your application after setting environment variables

## Current URLs

See [SETUP_ENV.md](SETUP_ENV.md) for the current URLs and quick setup instructions.

