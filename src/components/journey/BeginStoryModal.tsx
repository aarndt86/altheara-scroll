"use client";

import React, { useState } from "react";

interface BeginStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BeginStoryModal({ isOpen, onClose }: BeginStoryModalProps) {
  const [echoText, setEchoText] = useState("");
  const [step, setStep] = useState<"write" | "reflecting" | "reflected">("write");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!echoText.trim()) return;

    setStep("reflecting");
    setTimeout(() => {
      setStep("reflected");
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300">
      <div className="relative w-full max-w-xl bg-[#FAF9F5] text-[#1C1916] rounded-sm p-6 sm:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.4)] border border-[#E4DCCE] flex flex-col justify-between max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8C8275] hover:text-[#1C1916] text-xl font-sans font-light p-2 cursor-pointer transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        {step === "write" && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#8C8275] font-bold">
                YOUR FIRST ECHO
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#1C1916] font-normal leading-tight">
                EVERY ALTHEARA BEGINS WITH ONE MOMENT.
              </h2>
              <p className="font-reading text-base text-[#5A5248] italic font-light mt-1">
                What happened recently that you don&apos;t want to lose?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              <textarea
                value={echoText}
                onChange={(e) => setEchoText(e.target.value)}
                placeholder="A small thought, a conversation, a quiet observation from today..."
                className="w-full h-36 p-4 rounded-sm bg-white border border-[#E4DCCE] font-reading text-base text-[#1C1916] placeholder-[#A69C8E] focus:outline-none focus:border-[#C9AE7C] focus:ring-1 focus:ring-[#C9AE7C] leading-relaxed resize-none font-light"
                autoFocus
              />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="font-reading text-xs text-[#8C8275] italic font-light">
                  A few sentences are enough.
                </span>
                <button
                  type="submit"
                  disabled={!echoText.trim()}
                  className="w-full sm:w-auto bg-[#1C1916] text-[#FAF9F6] font-sans text-xs uppercase tracking-[0.2em] font-bold px-7 py-3.5 rounded-sm hover:bg-[#2C2824] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  SAVE ECHO &rarr;
                </button>
              </div>
            </form>
          </div>
        )}

        {step === "reflecting" && (
          <div className="py-16 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#C9AE7C] animate-ping" />
            <p className="font-display text-xl sm:text-2xl text-[#1C1916] font-normal tracking-wide">
              SITTING WITH YOUR WORDS...
            </p>
            <p className="font-reading text-sm text-[#8C8275] italic font-light">
              Finding what is meaningful inside what happened.
            </p>
          </div>
        )}

        {step === "reflected" && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#A68A56] font-bold">
                ECHO KEPT
              </span>
              <h2 className="font-display text-2xl text-[#1C1916] font-normal">
                YOUR FIRST MOMENT IS SAVED.
              </h2>
            </div>

            <div className="p-5 rounded-sm bg-white border border-[#E4DCCE] flex flex-col gap-3">
              <blockquote className="font-reading text-sm sm:text-base text-[#2C241D] italic font-light leading-relaxed">
                &ldquo;{echoText}&rdquo;
              </blockquote>
              <div className="pt-3 border-t border-[#E4DCCE]/60 flex items-start gap-2 text-xs text-[#736C64] font-reading">
                <span className="text-[#A68A56] font-bold">✦</span>
                <p className="leading-relaxed">
                  Reflection: The days are small while they happen. Keeping this moment ensures it becomes part of the story that continues.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <p className="font-reading text-xs sm:text-sm text-[#5A5248] leading-relaxed font-light">
                To keep this Echo and let your life story begin accumulating, create your private Altheara account:
              </p>
              <a
                href="#open"
                onClick={onClose}
                className="block text-center bg-[#1C1916] text-[#FAF9F6] font-sans text-xs uppercase tracking-[0.25em] font-bold py-3.5 rounded-sm hover:bg-[#2C2824] transition-colors"
              >
                CREATE YOUR PRIVATE ARCHIVE &rarr;
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
