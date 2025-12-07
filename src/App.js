import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Scrolltotop from './components/Scrolltotop';
import CustomCursor from "./components/CustomCursor";
import Splash from './components/SplashCursor';

// Lazy load all page components
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const CoursePage = React.lazy(() => import("./pages/CoursePage"));
const FranchisePage = React.lazy(() => import("./pages/FranchisePage"));
const CareersPage = React.lazy(() => import("./pages/CareersPage"));
// Temporarily removed Insights page
// const Insight = React.lazy(() => import("./pages/InsightPage"));
const Contact = React.lazy(() => import("./pages/ContactPage"));
const AbacusPage = React.lazy(() => import("./pages/AbacusPage"));
const VedicPage = React.lazy(() => import("./pages/VedicPage"));
const RubicPage = React.lazy(() => import("./pages/RubicPage"));
const HandwritingPage = React.lazy(() => import("./pages/HandwritingPage"));
const ReadingPage = React.lazy(() => import("./pages/ReadingPage"));
const SpellingBeePage = React.lazy(() => import("./pages/SpellingBeePage"));
const VideoEntryPage = React.lazy(() => import("./pages/VideoEntryPage"));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    fontSize: '18px'
  }}>
    Loading...
  </div>
);

// Function to check if video entry should be disabled (after 5 PM on Dec 7, 2025)
const isVideoEntryDisabled = () => {
  const cutoffDate = new Date('2025-12-07T17:00:00'); // December 7, 2025 at 5:00 PM
  const currentDate = new Date();
  return currentDate >= cutoffDate;
};

// Component to handle first visit logic
const FirstVisitHandler = () => {
  const videoDisabled = isVideoEntryDisabled();
  
  // If video is disabled (after cutoff time), go to home
  // Otherwise, show video entry page on every refresh until cutoff time
  if (videoDisabled) {
    return <HomePage />;
  }
  
  // Show video entry page on every refresh until 4 PM on Dec 7, 2025
  return <Navigate to="/entry-video" replace />;
};

// Wrapper component to conditionally render Header/Footer
const AppContent = () => {
  const location = useLocation();
  const isVideoEntryPage = location.pathname === '/entry-video';

  return (
    <>
      {!isVideoEntryPage && <Header />}
      <CustomCursor />
      {!isVideoEntryPage && <Scrolltotop />}
      <Splash />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<FirstVisitHandler />} />
          <Route path="/entry-video" element={<VideoEntryPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/abacus" element={<AbacusPage />} />
          <Route path="/vedic" element={<VedicPage />} />
          <Route path="/rubic" element={<RubicPage />} />
          <Route path="/handwriting" element={<HandwritingPage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/spellingbee" element={<SpellingBeePage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/careers" element={<CareersPage />} />
          {/* Temporarily removed Insights page
          <Route path="/insight" element={<Insight />} />
          */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      {!isVideoEntryPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
