"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaWalking, FaChevronDown, FaCompass, FaUserAstronaut } from "react-icons/fa";

export default function ScrollWalkthroughHUD() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (val) => {
      setProgressPercent(Math.round(val * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const depthZ = (8 - (progressPercent / 100) * 28).toFixed(1);
  const stepsTaken = Math.round(progressPercent * 2.5);

  return (
    <>
      {/* Right Side Vertical Progress Rail */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 [writing-mode:vertical-lr] rotate-180 flex items-center gap-2 mb-2">
          <FaUserAstronaut className="rotate-90 text-cyan-400" />
          <span>3D Walking Avatar Guide</span>
        </div>

        <div className="relative w-1.5 h-48 bg-white/10 rounded-full overflow-hidden border border-white/10 backdrop-blur-md">
          <motion.div
            className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full origin-top"
            style={{ scaleY }}
          />
        </div>

        <div className="text-[10px] font-mono text-cyan-300 font-bold px-2 py-1 rounded-md bg-black/70 border border-white/10 backdrop-blur-md">
          {progressPercent}%
        </div>
      </div>

      {/* Floating Bottom 3D Walking Character HUD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-5 py-2.5 rounded-full glass-panel border border-cyan-400/40 text-xs font-mono text-cyan-300 flex items-center gap-3 shadow-2xl shadow-cyan-500/25 backdrop-blur-xl"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400 flex items-center justify-center">
            <FaWalking className="text-[8px] text-black" />
          </span>
        </span>
        <span className="font-semibold text-white">3D Person Walking Mode</span>
        <span className="text-cyan-400 border-l border-white/15 pl-3 font-mono">
          Steps: <strong className="text-white">{stepsTaken}</strong> • Depth: <strong className="text-white">{depthZ}m</strong>
        </span>
        <FaChevronDown className="text-cyan-400 animate-bounce text-xs ml-1" />
      </motion.div>
    </>
  );
}
