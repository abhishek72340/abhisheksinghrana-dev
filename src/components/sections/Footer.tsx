"use client";

import React from "react";
import Image from "next/image";
import { soundFx } from "@/utils/audio";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiHashnode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black py-16 text-white font-mono">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Nudot Oversized Footer Statement */}
        <div className="border-b border-white/10 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none font-sans">
                ABHISHEK <span className="text-stroke-white">SINGH RANA</span>
              </h2>
            </div>
            <a
              href="#"
              onClick={() => soundFx.playClick()}
              className="px-6 py-3 rounded-full bg-white text-black font-mono font-black text-xs tracking-widest uppercase hover:bg-zinc-200 transition-colors w-fit"
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>

        {/* Footer Navigation & Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-zinc-400">
          <div className="space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">DIRECT REACH</span>
            <p className="text-white font-bold">abhisingh.72340@gmail.com</p>
            <p>React.js / Next.js 15 / TypeScript Architect</p>
          </div>

          <div className="space-y-2 md:text-right">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">VERIFIED PROFILES</span>
            <div className="flex flex-wrap md:justify-end gap-3 text-white font-bold uppercase">
              <a href="https://github.com/abhishek72340" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <span>/</span>
              <a href="https://www.linkedin.com/in/abhishek-singh-rana-6354a9180/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <span>/</span>
              <a href="https://leetcode.com/u/user1557Uf/" target="_blank" rel="noreferrer" className="hover:underline">LeetCode</a>
              <span>/</span>
              <a href="https://hashnode.com/@abhishek72340" target="_blank" rel="noreferrer" className="hover:underline">Hashnode</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-center text-center text-[11px] text-zinc-500 uppercase font-bold">
          <p>© {currentYear} ABHISHEK SINGH RANA. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}

