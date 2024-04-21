import React from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home, Projects, Skills, About } from "./pages";
import NotFoundPage from "./pages/NotFoundPage";

const SlideFadeTransition = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 120, duration: 0.5 },
      }}
      exit={{
        x: "100vw",
        opacity: 0,
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
};

function ScaleTransition({ children }) {
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
}

const SmokeOverlay = ({ children }) => {
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeIn" },
    },
    hidden: {
      opacity: 0,
      scale: 2,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      className="smoke-overlay"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <SmokeOverlay>
            <About />
          </SmokeOverlay>
        }
      />
      <Route
        path="/projects"
        element={
          <SlideFadeTransition>
            <Projects />
          </SlideFadeTransition>
        }
      />
      <Route
        path="/skills"
        element={
          <ScaleTransition>
            <Skills />
          </ScaleTransition>
        }
      />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
};

export default AnimatedRoutes;
