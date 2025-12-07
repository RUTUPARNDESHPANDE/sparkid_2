import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Header />
      <CustomCursor />
      <Scrolltotop />
      <Splash />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
      <Footer />
    </Router>
  );
}

export default App;
