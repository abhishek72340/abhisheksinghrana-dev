"use client";

import React from "react";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { soundFx } from "@/utils/audio";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHashnode } from "react-icons/si";

export default function AboutSection() {
  const highlights = [
    {
      title: "Frontend Engineering & Next.js 15",
      description:
        "Specializing in React.js, Next.js 15, Redux-Toolkit, TypeScript, and Tailwind CSS to craft pixel-perfect, accessible, and ultra-responsive user interfaces.",
    },
    {
      title: "Backend & System Architecture",
      description:
        "Designing resilient RESTful APIs with Node.js, Express.js, and MongoDB with clean Mongoose schemas, data validation, and asynchronous pipeline handling.",
    },
    {
      title: "Data Structures & Algorithms",
      description:
        "Actively solving complex algorithmic challenges on LeetCode (@user1557Uf), emphasizing dynamic programming, trees, graphs, and space-time optimization.",
    },
  ];

  return (
    <MotionSection id="about" className="py-24 relative z-10 bg-black text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Nudot Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              CRAFT & <span className="text-stroke-white">ENGINEERING.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-mono leading-relaxed">
            Software Engineer with 3 years of hands-on experience building high-performance web systems and intuitive digital products.
          </p>
        </div>

        {/* Nudot Editorial Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/15 mb-16 overflow-hidden rounded-xl">
          <div className="bg-zinc-950 p-6 space-y-2 hover:bg-black transition-colors">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
              YEARS EXPERIENCE
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
              3 YEARS
            </div>
          </div>
          <div className="bg-zinc-950 p-6 space-y-2 hover:bg-black transition-colors">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
              GITHUB PROJECTS
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
              27+
            </div>
          </div>
          <div className="bg-zinc-950 p-6 space-y-2 hover:bg-black transition-colors">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
              LEETCODE SOLVER
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
              Active
            </div>
          </div>
          <div className="bg-zinc-950 p-6 space-y-2 hover:bg-black transition-colors">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
              ARTICLES WRITTEN
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
              5+
            </div>
          </div>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Detailed Profile Box */}
          <div className="lg:col-span-6 bg-zinc-950 p-8 sm:p-10 rounded-2xl border border-white/15 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">BIOGRAPHY</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  ABHISHEK SINGH RANA
                </h3>
                <p className="text-xs font-mono text-zinc-400 font-bold">SOFTWARE ENGINEER — 3 YEARS EXP</p>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                Over the past 3 years, I have architected and deployed production-ready repositories and web platforms spanning Next.js e-commerce engines, real-time media tools, collaborative portals, and interactive workflow canvas applications.
              </p>

              <div className="space-y-3 pt-2 font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>React.js, Next.js 15, TypeScript, Redux-Toolkit, Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Node.js, Express.js, MongoDB, REST APIs, System Architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>LeetCode solver (@user1557Uf) & Hashnode technical writer</span>
                </div>
              </div>
            </div>

            {/* Links Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <a
                href="https://github.com/abhishek72340"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors font-bold uppercase"
              >
                <FaGithub className="text-white" /> GITHUB
              </a>
              <a
                href="https://leetcode.com/u/user1557Uf/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors font-bold uppercase"
              >
                <SiLeetcode className="text-white" /> LEETCODE
              </a>
              <a
                href="https://hashnode.com/@abhishek72340"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors font-bold uppercase"
              >
                <SiHashnode className="text-white" /> HASHNODE
              </a>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className="p-6 bg-black rounded-2xl border border-white/15 space-y-2 hover:border-white transition-colors"
              >
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">{item.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
