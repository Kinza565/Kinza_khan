"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiX } from "react-icons/fi";
import { suggestedQuestions, welcomeMessage } from "@/lib/ai-knowledge";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AIAssistant({ isOpen = false, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    const currentInput = inputValue.trim();
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setShowWelcome(false);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: currentInput },
          ],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
      
      const fallbackMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I couldn't connect right now. Please try again in a moment or use the Contact section to reach Kinza.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestedClick = (query: string) => {
    setInputValue(query);
    sendMessage();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
           className="w-full max-w-sm sm:max-w-[420px] lg:max-w-[440px] rounded-3xl overflow-hidden glass border border-border shadow-2xl shadow-black/5 backdrop-blur-xl"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-gradient-to-r from-white/5 to-transparent"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-soft">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" fill="white"/>
                  <circle cx="12" cy="12" r="2.5" fill="rgba(255,255,255,0.4)" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-semibold text-text text-sm tracking-tight">Kinza&apos;s AI Assistant</p>
                <p className="text-[11px] text-text-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online • Portfolio Guide
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl text-text-muted hover:text-text hover:bg-white/5 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Close chat"
            >
              <FiX size={16} />
            </button>
          </motion.div>

          {/* Messages Area */}
          <div className="relative h-[480px] sm:h-[520px] overflow-y-auto px-4 py-4 space-y-4" ref={chatContainerRef}>
            <AnimatePresence mode="popLayout">
              {showWelcome && messages.length === 0 ? (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="text-center py-2">
                    <p className="font-body text-text-muted text-[14px] leading-relaxed font-light">{welcomeMessage}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestedQuestions.map((sq, i) => (
                      <motion.button
                        key={sq.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => handleSuggestedClick(sq.query)}
                        className="px-4 py-3 text-left rounded-2xl border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 text-sm font-body text-text-muted hover:text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <span className="font-medium text-text text-[13px]">{sq.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-gradient-to-br from-primary to-primary-dark text-white rounded-br-md"
                            : "glass border border-border/50 rounded-bl-md shadow-soft"
                        }`}
                      >
                        <p className="font-body text-[14px] leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </p>
                        <p className={`mt-1.5 text-[10px] ${message.role === "user" ? "text-primary-light/80" : "text-text-muted/60"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="glass border border-border/50 rounded-2xl rounded-bl-md shadow-soft px-4 py-3">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Error Toast */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-4 mb-2 px-3 py-2 rounded-xl bg-red-950/30 border border-red-800/30 text-red-300 text-[12px] font-body flex items-center gap-2"
            >
              <span className="flex-shrink-0">⚠</span>
              <span>{error}</span>
            </motion.div>
          )}

          {/* Input Area */}
          <div className="border-t border-border bg-white/5 p-4">
            <div className="relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me about Kinza&apos;s work..."
                disabled={isLoading}
                rows={1}
                className="w-full px-4 py-3 pr-14 glass border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl text-sm font-body text-text placeholder-text-muted/50 resize-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Type your message"
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-3 bottom-3 w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center hover:shadow-soft transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Send message"
              >
                <FiSend size={15} />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] font-body text-text-muted/60">
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </motion.div>

        {/* Floating Button */}
        <AnimatePresence>
          <motion.button
            onClick={onClose}
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 90 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center shadow-[0_10px_30px_rgba(34,211,238,0.4)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/40 z-50"
            aria-label="Close AI Assistant"
          >
            <FiX size={20} />
          </motion.button>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
