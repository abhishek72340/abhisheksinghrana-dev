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
    }, 100);

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

          {/* Center Brand Name & Counter */}
          <div className="space-y-4 text-center my-auto">
            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter font-sans">
              ABHISHEK <span className="text-stroke-white">SINGH RANA</span>
            </h2>
            <p className="text-md font-mono text-zinc-400 tracking-widest uppercase font-semibold">
              SOFTWARE ENGINEER
            </p>
          </div>

          {/* Bottom Progress Counter */}
          <div className="flex items-end justify-between border-t border-white/20 pt-6">
            <div></div>
            <div className="text-4xl sm:text-6xl font-black font-sans tracking-tight">
              {progress < 10 ? `0${progress}` : progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
