"use client";

import React from "react";
import { soundFx } from "@/utils/audio";
import {
  FaTimes,
  FaDownload,
  FaPrint,
  FaCheckCircle,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  const handleDownload = () => {
    soundFx.playClick();
    alert("Downloading Abhishek Singh Rana's Official CV PDF...");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-4xl rounded-3xl p-6 sm:p-10 border border-white/20 space-y-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all shadow-sm"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-bold">
              Verified Developer CV
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Abhishek Singh Rana</h2>
            <p className="text-sm font-mono text-zinc-300 font-bold">
              Software Engineer • 3 Years Experience
            </p>
            <p className="text-xs text-zinc-400 mt-1 font-mono font-semibold">
              Email: abhisingh.72340@gmail.com • India
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              onMouseEnter={() => soundFx.playHover()}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 border border-white/20 shadow-sm"
            >
              <FaPrint /> Print CV
            </button>
            <button
              onClick={handleDownload}
              onMouseEnter={() => soundFx.playHover()}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-extrabold flex items-center gap-2 shadow-lg"
            >
              <FaDownload /> Download PDF
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 text-zinc-200 text-sm">
          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
              <FaCode className="text-white" /> Professional Summary
            </h3>
            <p className="text-zinc-300 leading-relaxed font-normal">
              Software Engineer with 3 years of hands-on experience specializing in modern web applications. Proven track record building high-performance frontend interfaces with React.js, Next.js 15, Redux-Toolkit, TypeScript, and Tailwind CSS, backed by Node.js, Express.js, and MongoDB services. Author of 27+ open-source GitHub repositories and technical articles on Hashnode.
            </p>
          </div>

          {/* Core Technical Expertise */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
              <FaCheckCircle className="text-white" /> Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-white font-bold block">Frontend Stack</span>
                <p className="text-zinc-300 font-medium">React.js, Next.js 15, Redux-Toolkit, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Sass, Material-UI, Bootstrap</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-white font-bold block">Backend & DB</span>
                <p className="text-zinc-300 font-medium">Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, Mockbee Auth</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-white font-bold block">Tools & Platforms</span>
                <p className="text-zinc-300 font-medium">Git, GitHub (@abhishek72340), Bitbucket, Docker, LeetCode, Netlify, Figma</p>
              </div>
            </div>
          </div>

          {/* Authentic Projects */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
              <FaBriefcase className="text-white" /> Featured Engineering Projects
            </h3>

            <div className="space-y-4 border-l-2 border-white/20 pl-4">
              <div>
                <div className="flex justify-between items-center text-white font-bold">
                  <span>Aura - E-Commerce Platform</span>
                  <span className="text-xs font-mono text-zinc-300">Next.js 15 & TypeScript</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1 font-normal">
                  Built modern e-commerce web platform with Next.js 15 App Router, TypeScript, and Tailwind CSS.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center text-white font-bold">
                  <span>DressUp-Shop & SocialVibes</span>
                  <span className="text-xs font-mono text-zinc-300">React.js & Netlify Live Apps</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1 font-normal">
                  Developed e-commerce shopping experience and developer social platform with Redux-Toolkit, authentication, and filter algorithms.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center text-white font-bold">
                  <span>Media Recorder Suite & Mental-UP App</span>
                  <span className="text-xs font-mono text-zinc-300">React & Web APIs</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1 font-normal">
                  Screen/video capture tool leveraging browser MediaRecorder API, and dynamic activity app with custom React hooks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
