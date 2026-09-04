"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { soundFx } from "@/utils/audio";
import { FaGithub, FaTimes, FaCode } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";

interface Project {
  id: string;
  num: string;
  title: string;
  category: "Next.js" | "React.js" | "Utility & Tools";
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  metrics: string;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  const projects: Project[] = [
    {
      id: "aura-ecommerce",
      num: "01",
      title: "Aura Modern E-Commerce",
      category: "Next.js",
      subtitle: "Next.js 15 & TypeScript E-Commerce Platform",
      description:
        "High-performance modern e-commerce web application featuring Next.js 15 App Router, dynamic product listing, cart state, and responsive styling.",
      longDescription:
        "Aura is a modern e-commerce storefront built with Next.js 15, TypeScript, and Tailwind CSS. It emphasizes clean architectural patterns, SSR page rendering, and seamless user checkout navigation.",
      tags: ["Next.js 15", "TypeScript", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/abhishek72340/Aura",
      demoUrl: "https://aura-delta-hazel.vercel.app/",
      metrics: "Live Vercel Production",
    },
    {
      id: "dressup-shop",
      num: "02",
      title: "DressUp Fashion E-Commerce",
      category: "React.js",
      subtitle: "Full-Featured Fashion Shopping Web Application",
      description:
        "Interactive fashion shopping app built on React.js featuring user authentication, multi-filter sorting, cart management, and checkout.",
      longDescription:
        "DressUp-Shop is a live production React application utilizing Mockbee authentication, rating filters, price sliders, and category views. Integrated with live fashion trends API.",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Mockbee Auth"],
      githubUrl: "https://github.com/abhishek72340/DressUp-ecommerce",
      demoUrl: "https://dressup-shop.netlify.app/",
      metrics: "Live Netlify Production",
    },
    {
      id: "media-recorder",
      num: "04",
      title: "Media Recorder Suite",
      category: "Utility & Tools",
      subtitle: "Browser Screen, Video & Audio Capture Tool",
      description:
        "Web utility application enabling users to record screen activities, webcam video, and microphone audio with immediate local download.",
      longDescription:
        "Built with React.js and the native Web MediaRecorder API. Allows seamless recording controls, live stream preview, and high-definition video exports directly in browser.",
      tags: ["React.js", "MediaRecorder API", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/abhishek72340/media-recorder",
      demoUrl: "https://media-recorder11.netlify.app/",
      metrics: "Browser Web API Integration",
    },
    {
      id: "mentalup-activity",
      num: "05",
      title: "Mental-UP Activity & Quiz App",
      category: "Utility & Tools",
      subtitle: "Cognitive Quiz & Interactive Activity Application",
      description:
        "Interactive cognitive quiz and activity platform built with React hooks, dynamic question sets, and real-time score tracking.",
      longDescription:
        "Mental-UP Activity App demonstrates custom React hook architecture (useState, useEffect, custom timers). Provides an engaging quiz interface with instant feedback.",
      tags: ["React.js", "Custom Hooks", "JavaScript", "CSS3"],
      githubUrl: "https://github.com/abhishek72340/MentalUP-Activity-App",
      demoUrl: "https://activity-app1.netlify.app/",
      metrics: "Interactive Quiz Engine",
    },
    {
      id: "chatbot-flow-builder",
      num: "06",
      title: "Chatbot Flow Builder",
      category: "Utility & Tools",
      subtitle: "Visual Drag & Drop Workflow Interface",
      description:
        "Web interface designed for visual construction and management of chatbot response trees and workflow nodes.",
      longDescription:
        "Built with React.js and ReactFlow library. Enables developers to visually connect node components, configure prompt parameters, and export flow schemas.",
      tags: ["React.js", "ReactFlow", "JavaScript", "Styled Components"],
      githubUrl: "https://github.com/abhishek72340/chatbot-flow-builder",
      metrics: "Node Graph Workflow",
    },
  ];

  const categories = ["All", "Next.js", "React.js", "Utility & Tools"];

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <MotionSection id="projects" className="py-24 relative z-10 bg-black text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Nudot Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              FEATURED <span className="text-stroke-white">PROJECTS.</span>
            </h2>
          </div>
          
          {/* Nudot Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(cat);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all ${
                  activeTab === cat
                    ? "bg-white text-black font-bold"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Nudot Editorial Project Showcase List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-black hover:bg-zinc-950 p-8 sm:p-10 rounded-2xl border border-white/15 hover:border-white transition-all duration-300 group flex flex-col lg:flex-row lg:items-center justify-between gap-8"
            >
              {/* Left Column: Titles */}
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 uppercase font-bold">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                    {project.category}
                  </span>
                  <span className="text-zinc-400">• {project.metrics}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors font-sans">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-zinc-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedProject(project);
                  }}
                  className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold tracking-widest uppercase border border-white/20 transition-all"
                >
                  DETAILS
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/20 transition-all text-sm"
                  title="View GitHub Repository"
                >
                  <FaGithub />
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    className="px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-mono text-xs font-black tracking-widest uppercase flex items-center gap-2 shadow-lg transition-all group-hover:scale-105"
                  >
                    <span>VISIT SITE</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="bg-zinc-950 w-full max-w-2xl rounded-2xl p-8 border border-white/20 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                soundFx.playClick();
                setSelectedProject(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <FaTimes className="text-base" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-bold uppercase">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl font-black uppercase text-white tracking-tight">{selectedProject.title}</h3>
              <p className="text-xs font-mono text-zinc-400 font-bold">{selectedProject.subtitle}</p>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed font-light">
              <p>{selectedProject.longDescription}</p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs font-mono uppercase text-zinc-400 font-bold">Architecture Highlight:</span>
                <p className="text-sm font-bold font-mono text-white">{selectedProject.metrics}</p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-zinc-400 font-bold">Tech Stack:</span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white border border-white/15 font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/15">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold flex items-center gap-2 border border-white/20 uppercase"
              >
                <FaGithub /> GITHUB REPO
              </a>
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-mono font-black tracking-widest uppercase flex items-center gap-2 shadow-lg"
                >
                  <span>LAUNCH LIVE APP</span>
                  <FaArrowUpRightFromSquare />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </MotionSection>
  );
}

