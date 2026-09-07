"use client";

import React, { useRef, useState, useEffect } from "react";

interface AudioToggleProps {
  src?: string;
  isPastCinematic?: boolean;
  className?: string;
}

export function AudioToggle({
  src = "/audio/ambient.mp3",
  isPastCinematic = false,
  className = ""
}: AudioToggleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Default UI state is SOUND ON
  const [isPlaying, setIsPlaying] = useState(true);
  const userMutedRef = useRef(false);

  const startPlayback = () => {
    const audio = audioRef.current;
    if (!audio || userMutedRef.current) return;

    audio.volume = 0.45;
    audio.muted = false;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser blocks unmuted audio on cold load, start muted to buffer/run immediately
          if (!userMutedRef.current) {
            audio.muted = true;
            audio.play().then(() => {
              // Playing muted in background; will unmute on first gesture
            }).catch(() => {});
          }
        });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;

    // Direct event synchronization
    const onPlay = () => {
      if (!audio.muted) setIsPlaying(true);
    };
    const onPause = () => {
      if (userMutedRef.current) setIsPlaying(false);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    // 1. Immediate unmuted autoplay attempt
    startPlayback();

    // 2. Also attempt as soon as enough data has loaded
    const onCanPlay = () => {
      if (!userMutedRef.current && (audio.paused || audio.muted)) {
        startPlayback();
      }
    };
    audio.addEventListener("canplaythrough", onCanPlay);

    // 3. Fallback for strict browsers: any first touch or click instantly unmutes and plays
    const handleFirstGesture = () => {
      if (userMutedRef.current) return;
      if (audio.paused || audio.muted) {
        audio.muted = false;
        audio.volume = 0.45;
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
      removeListeners();
    };

    const removeListeners = () => {
      document.removeEventListener("pointerdown", handleFirstGesture, true);
      document.removeEventListener("touchstart", handleFirstGesture, true);
      document.removeEventListener("click", handleFirstGesture, true);
      document.removeEventListener("keydown", handleFirstGesture, true);
      window.removeEventListener("scroll", handleFirstGesture, true);
    };

    document.addEventListener("pointerdown", handleFirstGesture, { capture: true, passive: true });
    document.addEventListener("touchstart", handleFirstGesture, { capture: true, passive: true });
    document.addEventListener("click", handleFirstGesture, { capture: true, passive: true });
    document.addEventListener("keydown", handleFirstGesture, { capture: true, passive: true });
    window.addEventListener("scroll", handleFirstGesture, { capture: true, passive: true });

    return () => {
      removeListeners();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("canplaythrough", onCanPlay);
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused && !audio.muted) {
      // Currently playing sound -> Pause/Mute
      userMutedRef.current = true;
      audio.muted = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      // Currently muted/paused -> Play
      userMutedRef.current = false;
      audio.muted = false;
      audio.volume = 0.45;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio play blocked:", err);
      });
    }
  };

  return (
    <>
      {/* Persistent HTML5 Audio element */}
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        autoPlay
        playsInline
      />

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
        title={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
        className={`group flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-md transition-all duration-300 pointer-events-auto cursor-pointer ${
          isPastCinematic
            ? "border border-[#E4DCCE] bg-white/80 text-[#5A5248] hover:text-[#1C1916] hover:border-[#B8A78E] shadow-xs"
            : "border border-linen/25 bg-black/30 text-linen/85 hover:text-wheat hover:border-wheat/50 shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
        } ${className}`}
      >
        {/* Soundwave Bars Indicator */}
        <div className="flex items-center gap-[2.5px] h-3">
          <span
            className={`w-[2px] rounded-full transition-all duration-300 ${
              isPastCinematic ? "bg-[#A68A56]" : "bg-wheat"
            } ${isPlaying ? "h-3 animate-pulse" : "h-1 opacity-50"}`}
          />
          <span
            className={`w-[2px] rounded-full transition-all duration-300 ${
              isPastCinematic ? "bg-[#A68A56]" : "bg-wheat"
            } ${isPlaying ? "h-2 animate-pulse [animation-delay:150ms]" : "h-1.5 opacity-50"}`}
          />
          <span
            className={`w-[2px] rounded-full transition-all duration-300 ${
              isPastCinematic ? "bg-[#A68A56]" : "bg-wheat"
            } ${isPlaying ? "h-3.5 animate-pulse [animation-delay:300ms]" : "h-1 opacity-50"}`}
          />
        </div>

        <span className="font-sans text-[9px] tracking-[0.2em] uppercase font-bold transition-colors duration-300">
          {isPlaying ? "SOUND ON" : "SOUND OFF"}
        </span>
      </button>
    </>
  );
}
