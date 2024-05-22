import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { rotate } from "../assets/icons";

const RotatePrompt = ({isPortrait}) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

  return (
    <AnimatePresence>
      {isHomePage && isPortrait && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(110, 146, 146, 0.8)",
            color: "white",
            zIndex: 9,
            flexDirection: "column",
          }}
        >
          <motion.img
            src={rotate}
            alt={"Rotate your device"}
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 90, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="w-24 h-24"
          />
            <p className="text-sm lg:text-xl text-black bg-red-200 py-3  text-center">
                Please rotate your screen for the best experience.🙏
            </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RotatePrompt;
