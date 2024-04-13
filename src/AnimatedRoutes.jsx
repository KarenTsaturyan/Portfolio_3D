import React from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home, Projects, Skills, About } from "./pages";

function ScaleTransition({ children }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
      exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
      className="scale-transition"
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
          <ScaleTransition>
            <Projects />
          </ScaleTransition>
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
    </Routes>
  );
};

export default AnimatedRoutes;
