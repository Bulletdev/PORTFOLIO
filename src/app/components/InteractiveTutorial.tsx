"use client";

import { useState, useEffect } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { HiCursorClick } from "react-icons/hi";
import { useLanguage } from "../contexts/languageContext";

export default function InteractiveTutorial() {
  const [showTutorial, setShowTutorial] = useState(false);
  const { t } = useLanguage();

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
        <div className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center px-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-lg w-full pointer-events-auto"
          >
            <div className="bg-gradient-to-r from-spotify-green to-green-500 text-spotify-black p-5 rounded-2xl shadow-2xl border-2 border-white/20">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full flex-shrink-0 animate-pulse">
                  <HiCursorClick className="text-2xl" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    {t.tutorial.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3">
                    Click the green <FaPlay className="inline text-xs mx-1" />
                    <strong> play</strong> button in{" "}
                    <strong>&quot;{t.tutorial.sectionRef}&quot;</strong>{" "}
                    to see full details of each position!
                  </p>
                  <p className="text-xs opacity-80">{t.tutorial.explore}</p>
                </div>

                <button
                  onClick={handleClose}
                  className="flex-shrink-0 hover:bg-white/20 p-2 rounded-full transition-all duration-200"
                  aria-label={t.tutorial.closeLabel}
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
