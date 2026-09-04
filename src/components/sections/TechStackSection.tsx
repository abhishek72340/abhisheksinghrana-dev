"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import SkillOrbs3D from "@/components/canvas/SkillOrbs3D";
import { soundFx } from "@/utils/audio";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
  FaCube,
  FaSearch,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiRedux,
} from "react-icons/si";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "DevOps & Tools" | "3D & UI";
  icon: React.ReactNode;
  color: string;
  experience: string;
}

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const techStack: TechItem[] = [
    {
      name: "React.js",
      category: "Frontend",
      icon: <FaReact />,
      color: "#61DAFB",
      experience: "3 Years",
    },
    {
      name: "Next.js 15",
      category: "Frontend",
      icon: <SiNextdotjs />,
      color: "#FFFFFF",
      experience: "3 Years",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: <SiTypescript />,
      color: "#3178C6",
      experience: "3 Years",
    },
    {
      name: "Redux-Toolkit",
      category: "Frontend",
      icon: <SiRedux />,
      color: "#764ABC",
      experience: "3 Years",
    },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      icon: <FaJs />,
      color: "#F7DF1E",
      experience: "3 Years",
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FaHtml5 />,
      color: "#E34F26",
      experience: "3 Years",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FaCss3Alt />,
      color: "#1572B6",
      experience: "3 Years",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
      experience: "3 Years",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <FaNodeJs />,
      color: "#339933",
      experience: "3 Years",
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: <SiExpress />,
      color: "#FFFFFF",
      experience: "3 Years",
    },
    {
      name: "MongoDB",
      category: "Backend",
      icon: <SiMongodb />,
      color: "#47A248",
      experience: "3 Years",
    },
    {
      name: "Docker",
      category: "DevOps & Tools",
      icon: <FaDocker />,
      color: "#2496ED",
      experience: "2.5 Years",
    },
    {
      name: "Git",
      category: "DevOps & Tools",
      icon: <FaGitAlt />,
      color: "#F05032",
      experience: "3 Years",
    },
    {
      name: "GitHub",
      category: "DevOps & Tools",
      icon: <FaGithub />,
      color: "#FFFFFF",
      experience: "3 Years",
    },
    {
      name: "Bitbucket",
      category: "DevOps & Tools",
      icon: <FaBitbucket />,
      color: "#0052CC",
      experience: "3 Years",
    },
    {
      name: "Three.js & R3F",
      category: "3D & UI",
      icon: <FaCube />,
      color: "#FFFFFF",
      experience: "2 Years",
    },
    {
      name: "Framer Motion",
      category: "3D & UI",
      icon: <SiFramer />,
      color: "#0055FF",
      experience: "3 Years",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "DevOps & Tools", "3D & UI"];

  const filteredTech = techStack.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MotionSection id="skills" className="py-24 relative z-10 bg-black text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Nudot Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              COMMAND & <span className="text-stroke-white">STACK.</span>
            </h2>
          </div>

          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-xs" />
            <input
              type="text"
              placeholder="Search tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-zinc-950 border border-white/15 text-white text-xs font-mono placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors uppercase"
            />
          </div>
        </div>

        {/* 3D WebGL Orbit Canvas Display */}
        <div className="mb-12 bg-zinc-950 p-6 rounded-2xl border border-white/15 relative overflow-hidden">
          <div className="absolute top-4 left-6 text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-2 z-10">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Interactive 3D Skill Sphere Matrix (Drag to Rotate)
          </div>
          <SkillOrbs3D />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-zinc-950 p-2 rounded-full border border-white/10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all ${
                activeCategory === cat
                  ? "bg-white text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                soundFx.playHover();
                setHoveredIdx(idx);
              }}
              onMouseLeave={() => setHoveredIdx(null)}
              className="p-5 bg-black hover:bg-zinc-950 rounded-2xl border border-white/15 space-y-4 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-2xl group-hover:scale-110 transition-all duration-300"
                  style={{ color: hoveredIdx === idx ? item.color : "white" }}
                >
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 font-bold border border-white/10 uppercase">
                  {item.experience}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white flex items-center justify-between font-mono">
                  <span>{item.name}</span>
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 font-bold uppercase mt-0.5">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

