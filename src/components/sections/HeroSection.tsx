"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero3DScene from "@/components/canvas/Hero3DScene";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const techStack = [
    "NEXT.JS 15",
    "REACT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "EXPRESS",
    "MONGODB",
    "DOCKER",
    "TAILWIND CSS",
    "REDUX TOOLKIT",
    "REST APIS",
    "SYSTEM ARCHITECTURE",
  ];

  // Pre-load speech voices and unlock audio context on initial page gesture
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    const unlockAudio = () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.resume();
      }
    };

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("click", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("click", unlockAudio);
    };
  }, []);

  // Speech Voice Synthesizer & Audio Chime on Photo Hover
  const speakHi = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();
        const utterance = new SpeechSynthesisUtterance("Hi there, this is Abhishek Singh Rana");
        utterance.rate = 0.95;
        utterance.pitch = 1.05;
        utterance.volume = 1.0;

        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          const engVoice = voices.find(
            (v) => v.lang.startsWith("en-US") || v.lang.startsWith("en")
          );
          if (engVoice) utterance.voice = engVoice;
        }

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.error("Speech Synthesis error:", err);
      }
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-60px)] pt-28 pb-0 flex flex-col justify-between overflow-hidden bg-black text-white font-mono selection:bg-white selection:text-black">
      {/* Background Subtle Nudot Grid */}
      <div className="absolute inset-0 nudot-grid opacity-20 pointer-events-none" />

      {/* 3D Glass Sphere Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Hero3DScene speed={0.6} wireframe={false} />
      </div>

      {/* Hero Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 my-auto pt-4 pb-8">
        {/* Main Section Content: Left Headline & Right 3D Flip Portrait Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Giant Clean Display Headline & Summary */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-[11vw] sm:text-[8vw] lg:text-[6.5vw] font-black uppercase tracking-tighter leading-[0.88] font-sans text-white">
              ABHISHEK SINGH RANA
            </h1>

            <div className="space-y-4 pt-2">
              <h2 className="text-[7vw] sm:text-[5vw] lg:text-[4vw] font-black uppercase tracking-tight leading-[0.95] font-sans text-zinc-400">
                SOFTWARE ENGINEER
              </h2>
              <p className="max-w-xl text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-mono border-l-2 border-white/30 pl-4 py-1">
                Engineered scalable web applications, robust REST APIs, and micro-frontend architectures with high performance, precision, and modern web design principles.
              </p>
            </div>
          </div>

          {/* Right Column: Clean 3D Flip Interactive Studio Portrait Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              onMouseEnter={speakHi}
              className="group [perspective:1000px] w-64 h-80 sm:w-72 sm:h-96 cursor-pointer"
            >
              <div className="relative w-full h-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl">
                {/* FRONT SIDE (Crisp High-Contrast Black & White Photo) */}
                <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/20 bg-black [backface-visibility:hidden] group-hover:border-white/50 transition-colors shadow-2xl">
                  <Image
                    src="/profile.jpeg"
                    alt="Abhishek Singh Rana"
                    fill
                    className="object-cover filter grayscale  transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* BACK SIDE (180deg Rotated Minimalist Hi There Card) */}
                <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/30 bg-black p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl">
                  {/* Background Nudot Grid */}
                  <div className="absolute inset-0 nudot-grid opacity-25 pointer-events-none" />

                  {/* Clean Waving Hand Emoji & HI THERE (No White BG Boxes) */}
                  <div className="flex flex-col items-center justify-center gap-4 z-10 text-center select-none bg-transparent">
                    <span className="text-6xl animate-bounce leading-none bg-transparent">👋</span>
                    <h3 className="text-3xl sm:text-4xl font-black font-sans uppercase tracking-tight text-white bg-transparent leading-none">
                      HI THERE!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Continuous Tech Stack Marquee (Flush at Hero Section Bottom) */}
      <div className="w-full relative overflow-hidden py-4 border-y border-white/10 bg-zinc-950/40 z-10">
        <div className="flex whitespace-nowrap animate-marquee gap-8 text-xs font-mono text-zinc-400 uppercase">
          {techStack.concat(techStack).map((tech, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors tracking-widest font-semibold">
                {tech}
              </span>
              <span className="text-zinc-600">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
