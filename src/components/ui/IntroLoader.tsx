"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-black text-white flex flex-col justify-between p-8 sm:p-12 font-mono selection:bg-none pointer-events-auto"
        >
          {/* Top Info */}
          <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest">
            <span>[ NUDOT CLONE STUDIO ]</span>
            <span>ABHISHEK SINGH RANA ©2026</span>
          </div>

          {/* Center Brand Name & Counter */}
          <div className="space-y-4 text-center my-auto">
            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter font-sans">
              ABHISHEK <span className="text-stroke-white">SINGH RANA</span>
            </h2>
            <p className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
              SOFTWARE ENGINEER [ 3 YEARS EXP ]
            </p>
          </div>

          {/* Bottom Progress Counter */}
          <div className="flex items-end justify-between border-t border-white/20 pt-6">
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-500 block uppercase font-bold">LOADING ASSETS</span>
              <span className="text-xs text-zinc-300 font-bold uppercase">REACT.JS / NEXT.JS 15 / TYPESCRIPT</span>
            </div>
            <div className="text-4xl sm:text-6xl font-black font-sans tracking-tight">
              {progress < 10 ? `0${progress}` : progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
