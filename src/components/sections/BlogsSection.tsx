"use client";

import React from "react";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { soundFx } from "@/utils/audio";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

interface Article {
  num: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  tags: string[];
}

export default function BlogsSection() {
  const articles: Article[] = [
    {
      num: "01",
      title: "Promises: To handle async code in JavaScript",
      excerpt:
        "Comprehensive breakdown of JavaScript asynchronous execution, Promises, microtask queue, Promise.all, Promise.race, and async/await syntax.",
      date: "March 12, 2023",
      readTime: "5 MIN READ",
      url: "https://abhishek72340.hashnode.dev/promises-and-its-types",
      tags: ["JAVASCRIPT", "ASYNC", "PROMISES"],
    },
    {
      num: "02",
      title: "Nullish coalescing & Optional chaining in modern JS",
      excerpt:
        "Deep dive into ES2020 nullish coalescing (??) vs OR (||) operator, optional chaining (?.) navigation, and avoiding runtime TypeError exceptions.",
      date: "February 24, 2023",
      readTime: "4 MIN READ",
      url: "https://abhishek72340.hashnode.dev/nullish-coalescing-optional-chaining",
      tags: ["ES2020", "JAVASCRIPT", "CLEAN CODE"],
    },
    {
      num: "03",
      title: "Loose equality (==) VS Strict equality (===) in JavaScript",
      excerpt:
        "Understanding type coercion, implicit casting rules, and abstract equality algorithms in JavaScript engine runtimes.",
      date: "February 13, 2023",
      readTime: "4 MIN READ",
      url: "https://abhishek72340.hashnode.dev/difference-between-in-javascript",
      tags: ["JAVASCRIPT", "FUNDAMENTALS"],
    },
    {
      num: "04",
      title: "Blockchain Technology & Web3 Architecture",
      excerpt:
        "Introduction to distributed ledger systems, cryptographic hashing, consensus mechanisms, and smart contract fundamentals.",
      date: "September 29, 2022",
      readTime: "6 MIN READ",
      url: "https://abhishek72340.hashnode.dev/blockchain-technology",
      tags: ["BLOCKCHAIN", "WEB3"],
    },
  ];

  return (
    <MotionSection id="blogs" className="py-24 relative z-10 bg-black text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Nudot Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              ARTICLES & <span className="text-stroke-white">THOUGHTS.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-mono leading-relaxed">
            Technical writing & JavaScript deep-dives published by Abhishek Singh Rana on Hashnode.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art, idx) => (
            <a
              key={idx}
              href={art.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-black hover:bg-zinc-950 p-8 rounded-2xl border border-white/15 hover:border-white transition-all space-y-6 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 font-bold uppercase">
                  <span>{art.date} • {art.readTime}</span>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {art.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10 font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-white font-bold flex items-center gap-1.5 uppercase group-hover:translate-x-1 transition-transform">
                  <span>READ</span>
                  <FaArrowUpRightFromSquare className="text-xs" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

