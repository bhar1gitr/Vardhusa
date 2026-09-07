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
    <div className="bg-white min-h-screen">
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
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}