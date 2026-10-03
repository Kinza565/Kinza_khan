"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import AIAssistant from "./AIAssistant";

export default function AIAssistantWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <>
      {/* Floating Button with Luxury Robot Icon */}
      <motion.button
        onClick={toggleChat}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center shadow-[0_10px_30px_rgba(34,211,238,0.4)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.5)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40"
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <FiX size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="robot"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 400, damping: 15 }}
                />
                <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.3)" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notification Badge */}
      {!isOpen && !hasInteracted && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 2 }}
          className="fixed bottom-24 right-6 z-40 px-4 py-2.5 rounded-2xl glass border border-border shadow-soft text-sm font-body text-text"
        >
          Ask me anything about Kinza&apos;s work
        </motion.div>
      )}

      {/* Chat Window */}
      <AIAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
