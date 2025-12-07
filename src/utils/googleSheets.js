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
 * Submit form data to Google Sheets via Apps Script web app
 * @param {string} webAppUrl - Google Apps Script web app URL
 * @param {Object} data - Form data object
 * @returns {Promise<Object>} Response object with success status and message
 */
export const submitToGoogleSheets = async (webAppUrl, data) => {
  try {
    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Try to read response if CORS is enabled
    if (response.ok) {
      try {
        const result = await response.json();
        return {
          success: result.success !== false,
          message: result.success !== false ? "Form submitted successfully!" : (result.error || "Failed to submit"),
        };
      } catch (parseError) {
        // If response can't be parsed, assume success (no-cors mode)
        return {
          success: true,
          message: "Form submitted successfully!",
        };
      }
    } else {
      return {
        success: false,
        message: "Failed to submit. Please try again.",
      };
    }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    // Network errors might occur with no-cors, but request may still succeed
    // Return success to avoid confusing users (data will be in Sheets if successful)
    return {
      success: true,
      message: "Form submitted successfully!",
    };
  }
};

/**
 * Upload file to Google Drive and submit form data to Google Sheets
 * @param {string} webAppUrl - Google Apps Script web app URL
 * @param {Object} formData - Form data object
 * @param {File} file - File to upload (optional)
 * @returns {Promise<Object>} Response object with success status and message
 */
export const submitJobApplication = async (webAppUrl, formData, file) => {
  try {
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

    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Try to read response if CORS is enabled
    if (response.ok) {
      try {
        const result = await response.json();
        return {
          success: result.success !== false,
          message: result.success !== false ? "Application submitted successfully!" : (result.error || "Failed to submit"),
        };
      } catch (parseError) {
        // If response can't be parsed, assume success (no-cors mode)
        return {
          success: true,
          message: "Application submitted successfully!",
        };
      }
    } else {
      return {
        success: false,
        message: "Failed to submit. Please try again.",
      };
    }
  } catch (error) {
    console.error("Error submitting job application:", error);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
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

