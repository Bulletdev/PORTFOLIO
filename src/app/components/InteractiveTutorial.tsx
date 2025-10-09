"use client";

import { useState, useEffect } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { HiCursorClick } from "react-icons/hi";

export default function InteractiveTutorial() {
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");

    if (!hasSeenTutorial) {
      const timer = setTimeout(() => {
        setShowTutorial(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowTutorial(false);
    localStorage.setItem("hasSeenTutorial", "true");
  };

  useEffect(() => {
    if (showTutorial) {
      const timer = setTimeout(() => {
        handleClose();
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [showTutorial]);

  return (
    <AnimatePresence>
      {showTutorial && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-lg w-full mx-4"
        >
          <div className="bg-gradient-to-r from-spotify-green to-green-500 text-spotify-black p-5 rounded-2xl shadow-2xl border-2 border-white/20">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-full flex-shrink-0 animate-pulse">
                <HiCursorClick className="text-2xl" />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  Portfolio Interativo! 
                </h3>
                <p className="text-sm leading-relaxed mb-3">
                  Clique no botão verde <FaPlay className="inline text-xs mx-1" />
                  <strong> play</strong> na seção <strong>"Experiência Profissional"</strong>
                  para ver detalhes completos de cada cargo!
                </p>
                <p className="text-xs opacity-80">
                  Explore também os projetos e tecnologias 
                </p>
              </div>

              <button
                onClick={handleClose}
                className="flex-shrink-0 hover:bg-white/20 p-2 rounded-full transition-all duration-200"
                aria-label="Fechar tutorial"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
