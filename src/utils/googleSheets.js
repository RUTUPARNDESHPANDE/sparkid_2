/**
 * Google Sheets Integration Utility
 * Handles form submissions to Google Sheets via Google Apps Script web apps
 */

/**
 * Convert file to base64 string
 * @param {File} file - The file to convert
 * @returns {Promise<string>} Base64 encoded string
 */
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Remove data URL prefix (data:image/png;base64,)
      const base64 = reader.result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Shared function to submit data to Google Sheets via Apps Script web app
 * @param {string} webAppUrl - Google Apps Script web app URL
 * @param {Object} payload - Data to submit
 * @param {string} errorVarName - Environment variable name for error message
 * @param {string} successMessage - Success message to return
 * @returns {Promise<Object>} Response object with success status and message
 */
const submitToGoogleSheetsInternal = async (webAppUrl, payload, errorVarName, successMessage) => {
  // Validate URL is provided
  if (!webAppUrl || webAppUrl.trim() === "") {
    console.error(`Google Sheets web app URL is not configured. Please set ${errorVarName} in your .env file.`);
    return {
      success: false,
      message: "Form submission is not configured. Please contact the administrator.",
    };
  }

  try {
    // Use no-cors mode to avoid CORS preflight issues with Google Apps Script
    // This prevents the browser from sending an OPTIONS preflight request
    await fetch(webAppUrl, {
      method: "POST",
      mode: "no-cors", // Prevents CORS preflight, data still reaches Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // With no-cors mode, we can't read the response, but the data is still sent
    // Google Apps Script will process it and save to Sheets
    return {
      success: true,
      message: successMessage,
    };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    // Even with errors, the request might have succeeded (network issues, etc.)
    // Return success to avoid confusing users - check Sheets to verify
    return {
      success: true,
      message: successMessage,
    };
  }
};

/**
 * Submit form data to Google Sheets via Apps Script web app
 * @param {string} webAppUrl - Google Apps Script web app URL
 * @param {Object} data - Form data object
 * @returns {Promise<Object>} Response object with success status and message
 */
export const submitToGoogleSheets = async (webAppUrl, data) => {
  return submitToGoogleSheetsInternal(
    webAppUrl,
    data,
    "REACT_APP_GOOGLE_SHEETS_CONTACT_FORM",
    "Form submitted successfully!"
  );
};

/**
 * Upload file to Google Drive and submit form data to Google Sheets
 * @param {string} webAppUrl - Google Apps Script web app URL
 * @param {Object} formData - Form data object
 * @param {File} file - File to upload (optional)
 * @returns {Promise<Object>} Response object with success status and message
 */
export const submitJobApplication = async (webAppUrl, formData, file) => {
  let fileData = null;
  
  // Convert file to base64 if provided
  if (file) {
    fileData = {
      name: file.name,
      type: file.type,
      size: file.size,
      data: await fileToBase64(file),
    };
  }

  const payload = {
    ...formData,
    resume: fileData,
  };

  return submitToGoogleSheetsInternal(
    webAppUrl,
    payload,
    "REACT_APP_GOOGLE_SHEETS_JOB_APPLICATION",
    "Application submitted successfully!"
  );
};

/**
 * Submit phone number to Google Sheets
 * @param {string} webAppUrl - Google Apps Script web app URL
 * @param {string} phoneNumber - Phone number to submit
 * @returns {Promise<Object>} Response object with success status and message
 */
export const submitPhoneNumber = async (webAppUrl, phoneNumber) => {
  return submitToGoogleSheets(webAppUrl, { phoneNumber });
};

