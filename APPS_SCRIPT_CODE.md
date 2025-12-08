# Google Apps Script Code - Copy and Paste Ready

Use these code blocks directly in your Google Apps Script editor. Make sure to:
1. Delete ALL existing code in the editor
2. Paste ONLY the JavaScript code (not the markdown formatting)
3. Save the script
4. Deploy as a web app with "Anyone" access

---

## 1. Contact Form Script

```javascript
function doGet(e) {
  return ContentService.createTextOutput('Contact Form Web App is running. Use POST to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}

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
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## 2. Question Form Script

```javascript
function doGet(e) {
  return ContentService.createTextOutput('Question Form Web App is running. Use POST to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}

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
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## 3. Job Application Script (with File Upload)

```javascript
function doGet(e) {
  return ContentService.createTextOutput('Job Application Web App is running. Use POST to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    let resumeLink = '';
    
    if (data.resume && data.resume.data) {
      try {
        const blob = Utilities.newBlob(
          Utilities.base64Decode(data.resume.data),
          data.resume.type || 'application/pdf',
          data.resume.name || 'resume.pdf'
        );
        
        const folderName = 'Job Applications - Resumes';
        let folder;
        const folders = DriveApp.getFoldersByName(folderName);
        
        if (folders.hasNext()) {
          folder = folders.next();
        } else {
          folder = DriveApp.createFolder(folderName);
        }
        
        const file = folder.createFile(blob);
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
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Setup Instructions

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. **Delete ALL existing code** in the editor
4. Copy and paste ONLY the JavaScript code above (for the appropriate form)
5. Click **Save** (Ctrl+S or Cmd+S)
6. Click **Deploy** → **New deployment**
7. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
8. Set:
   - **Description**: [Form Name] Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
9. Click **Deploy**
10. Copy the **Web app URL**
11. Update the URL in `src/config/googleSheets.js`

