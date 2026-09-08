import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Businesses from "./pages/Businesses";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import CSR from "./pages/CSR";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Policy Pages Imports
import Disclaimer from "./pages/Disclaimer";
import QualityPolicy from "./pages/QualityPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HsePolicies from "./pages/HsePolicies";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />

            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />

            <Route
              path="/businesses"
              element={
                <PageTransition>
                  <Businesses />
                </PageTransition>
              }
            />

            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />

            <Route
              path="/careers"
              element={
                <PageTransition>
                  <Careers />
                </PageTransition>
              }
            />

            <Route
              path="/csr"
              element={
                <PageTransition>
                  <CSR />
                </PageTransition>
              }
            />

            <Route
              path="/gallery"
              element={
                <PageTransition>
                  <Gallery />
                </PageTransition>
              }
            />

            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />

            {/* Policy Pages Routes */}
            <Route
              path="/disclaimer"
              element={
                <PageTransition>
                  <Disclaimer />
                </PageTransition>
              }
            />

            <Route
              path="/quality-policy"
              element={
                <PageTransition>
                  <QualityPolicy />
                </PageTransition>
              }
            />

            <Route
              path="/privacy-policy"
              element={
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              }
            />

            <Route
              path="/hse-policies"
              element={
                <PageTransition>
                  <HsePolicies />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}