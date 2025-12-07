# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for all forms in the Sparkids application. The integration uses Google Apps Script web apps to submit form data to Google Sheets and upload files to Google Drive.

## Prerequisites

- A Google account
- Access to Google Sheets and Google Drive
- Basic understanding of Google Apps Script

## Setup Steps

### Step 1: Create Google Sheets

1. Create three separate Google Sheets (or use one sheet with multiple tabs):
   - **Contact Form Sheet**: For contact form submissions
   - **Question Form Sheet**: For phone number submissions
   - **Job Application Sheet**: For job application submissions

2. Set up column headers in each sheet:

   **Contact Form Sheet:**
   - Column A: Timestamp
   - Column B: Full Name
   - Column C: Phone
   - Column D: Email
   - Column E: Reason
   - Column F: Message

   **Question Form Sheet:**
   - Column A: Timestamp
   - Column B: Phone Number

   **Job Application Sheet:**
   - Column A: Timestamp
   - Column B: Job Title
   - Column C: Full Name
   - Column D: Email
   - Column E: Phone Number
   - Column F: Current CTC
   - Column G: Expected CTC
   - Column H: Notice Period
   - Column I: Resume (Google Drive Link)
   - Column J: Portfolio Link

### Step 2: Create Google Apps Script Projects

For each form, you'll need to create a Google Apps Script web app:

#### 2.1 Contact Form Script

1. Open your Contact Form Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Delete the default code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const row = [
      data.timestamp || new Date(),
      data.fullName || '',
      data.phone || '',
      data.email || '',
      data.reason || '',
      data.message || ''
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({'Access-Control-Allow-Origin': '*'});
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({'Access-Control-Allow-Origin': '*'});
  }
}
```

4. Click **Save** (Ctrl+S or Cmd+S)
5. Click **Deploy** → **New deployment**
6. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
7. Set the following:
   - **Description**: Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
8. Click **Deploy**
9. Copy the **Web app URL** - you'll need this for the config file

#### 2.2 Question Form Script

1. Open your Question Form Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Delete the default code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const row = [
      new Date(),
      data.phoneNumber || ''
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({'Access-Control-Allow-Origin': '*'});
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({'Access-Control-Allow-Origin': '*'});
  }
}
```

4. Follow steps 4-9 from the Contact Form Script section
5. Copy the **Web app URL**

#### 2.3 Job Application Script (with File Upload)

1. Open your Job Application Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Delete the default code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    let resumeLink = '';
    
    // Handle file upload if resume is provided
    if (data.resume && data.resume.data) {
      try {
        const blob = Utilities.newBlob(
          Utilities.base64Decode(data.resume.data),
          data.resume.type || 'application/pdf',
          data.resume.name || 'resume.pdf'
        );
        
        // Create a folder in Google Drive (or use existing)
        const folderName = 'Job Applications - Resumes';
        let folder;
        const folders = DriveApp.getFoldersByName(folderName);
        
        if (folders.hasNext()) {
          folder = folders.next();
        } else {
          folder = DriveApp.createFolder(folderName);
        }
        
        // Upload file to Drive
        const file = folder.createFile(blob);
        
        // Set file permissions to "Anyone with the link can view"
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        
        resumeLink = file.getUrl();
      } catch (fileError) {
        console.error('File upload error:', fileError);
        resumeLink = 'Upload failed: ' + fileError.toString();
      }
    }
    
    const row = [
      data.timestamp || new Date(),
      data.jobTitle || '',
      data.fullName || '',
      data.email || '',
      data.phoneNumber || '',
      data.currentCTC || '',
      data.expectedCTC || '',
      data.noticePeriod || '',
      resumeLink,
      data.portfolioLink || ''
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({'Access-Control-Allow-Origin': '*'});
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({'Access-Control-Allow-Origin': '*'});
  }
}
```

4. Follow steps 4-9 from the Contact Form Script section
5. Copy the **Web app URL**

### Step 3: Update Configuration File

1. Open `src/config/googleSheets.js`
2. Replace the placeholder URLs with your actual web app URLs:

```javascript
export const GOOGLE_SHEETS_CONFIG = {
  contactForm: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
  questionForm: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
  jobApplication: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
};
```

### Step 4: Test the Integration

1. Start your React application: `npm start`
2. Test each form:
   - Submit the contact form
   - Submit a phone number in the question section
   - Submit a job application with a resume
3. Check your Google Sheets to verify the data is being saved correctly
4. Check your Google Drive for uploaded resumes (in the "Job Applications - Resumes" folder)

## Troubleshooting

### Issue: "Script function not found"
- Make sure you've saved the Apps Script code before deploying
- Ensure the function is named `doPost` (case-sensitive)

### Issue: "Access denied" or CORS errors
- Make sure the web app deployment has "Who has access" set to "Anyone"
- Redeploy the web app after changing access settings

### Issue: File uploads not working
- Check that the Apps Script has permission to access Google Drive
- Review the Apps Script execution logs: **View** → **Execution log**
- Ensure the folder name matches in the script

### Issue: Data not appearing in Sheets
- Check the column order matches the script
- Verify the sheet is the active sheet (not a different tab)
- Check Apps Script execution logs for errors

## Security Notes

- The web app URLs are public, but only accept POST requests
- File uploads are stored in a Google Drive folder with "Anyone with link" access
- Consider adding rate limiting or authentication if needed for production use
- Regularly review and clean up uploaded files in Google Drive

## Additional Resources

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Google Drive API](https://developers.google.com/drive/api)

