# Quick Environment Setup

## ⚠️ IMPORTANT: Create .env File

**The forms will not work until you create the `.env` file!**

## Steps

1. **Create a file named `.env`** in the root directory (same level as `package.json`)

2. **Copy and paste this exact content** into the `.env` file:

```env
REACT_APP_GOOGLE_SHEETS_CONTACT_FORM=https://script.google.com/macros/s/AKfycbzUgCbDcErhOL_ZsGVPs81MVoUqx-okuc3nSUHR9KG_CLFdZKwGrFQk9lzGfxzSdEGd/exec
REACT_APP_GOOGLE_SHEETS_QUESTION_FORM=https://script.google.com/macros/s/AKfycbypZpKDGM19nKxfczDi8Q4HQG6W9l9XukyCJtWCGX7dIWiIv5v8F2DJ1dz0-nB4hoar/exec
REACT_APP_GOOGLE_SHEETS_JOB_APPLICATION=https://script.google.com/macros/s/AKfycbysE7nx3C612FxaMgiTIns0BJxkBdV4gBcelhpwH86muAAmkzIBlXDAHn3LGn1XRS4XVA/exec
```

3. **Save the file**

4. **Restart your development server** (stop with Ctrl+C, then run `npm start` again)

## Verification

After creating the `.env` file and restarting, check the browser console. You should NOT see the warning about missing environment variables.

## Notes

- The `.env` file is already in `.gitignore`, so it won't be committed to Git
- Environment variables must start with `REACT_APP_` to work in Create React App
- You must restart the dev server after creating/updating `.env`

For more details, see [ENVIRONMENT_SETUP.md](ENVIRONMENT_SETUP.md).

