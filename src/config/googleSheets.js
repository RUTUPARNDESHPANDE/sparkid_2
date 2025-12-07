// Google Sheets Web App URLs
// Loaded from environment variables for security
// See .env.example and ENVIRONMENT_SETUP.md for setup instructions

export const GOOGLE_SHEETS_CONFIG = {
  // Contact form web app URL
  contactForm: process.env.REACT_APP_GOOGLE_SHEETS_CONTACT_FORM || "",
  
  // Question/Phone number form web app URL
  questionForm: process.env.REACT_APP_GOOGLE_SHEETS_QUESTION_FORM || "",
  
  // Job application form web app URL (handles both form data and file uploads)
  jobApplication: process.env.REACT_APP_GOOGLE_SHEETS_JOB_APPLICATION || "",
};

// Validate that all required environment variables are set
const missingVars = [];
if (!GOOGLE_SHEETS_CONFIG.contactForm) missingVars.push('REACT_APP_GOOGLE_SHEETS_CONTACT_FORM');
if (!GOOGLE_SHEETS_CONFIG.questionForm) missingVars.push('REACT_APP_GOOGLE_SHEETS_QUESTION_FORM');
if (!GOOGLE_SHEETS_CONFIG.jobApplication) missingVars.push('REACT_APP_GOOGLE_SHEETS_JOB_APPLICATION');

if (missingVars.length > 0) {
  console.warn('⚠️ Missing Google Sheets environment variables:', missingVars.join(', '));
  console.warn('📝 Please create a .env file in the root directory with these variables.');
  console.warn('📖 See SETUP_ENV.md or ENVIRONMENT_SETUP.md for instructions.');
  
  if (process.env.NODE_ENV === 'production') {
    console.error('❌ Production build requires all environment variables to be set!');
  }
}

