"use client";

import React from "react";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { soundFx } from "@/utils/audio";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCheck,
} from "react-icons/fa";

interface ExperienceItem {
  period: string;
  num: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      period: "AUG 2025 - PRESENT",
      num: "01",
      role: "MTS-1",
      company: "Zetexa Global",
      location: "Hyderabad, Telangana, India · On-site",
      type: "Full-Time",
      description:
        "Architecting and building production Next.js 15 and TypeScript web platforms with modern UI principles, optimal rendering performance, and high reliability.",
      bullets: [
        "Engineering responsive, scalable frontend applications with Next.js 15 App Router, React, and TypeScript.",
        "Collaborating on system architecture, optimizing component rendering, state management, and asset pipelines.",
        "Maintaining clean repository workflows with strict code reviews and automated CI/CD checks.",
      ],
      skills: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "System Architecture"],
    },
    {
      period: "NOV 2023 - JUN 2025",
      num: "02",
      role: "Frontend Developer",
      company: "98thPercentile",
      location: "Hyderabad, Telangana, India · On-site",
      type: "Full-Time",
      description:
        "Engineered interactive educational web platforms, user dashboards, and dynamic UI systems using React.js, Next.js, and Redux Toolkit.",
      bullets: [
        "Developed modular React components and Next.js pages for high-traffic web applications.",
        "Implemented robust state management with Redux-Toolkit and optimized cross-browser UI responsiveness.",
        "Collaborated with cross-functional product & backend teams to integrate REST APIs and deliver sprint goals ahead of schedule.",
      ],
      skills: ["React.js", "Next.js", "Redux-Toolkit", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      period: "APR 2023 - OCT 2023",
      num: "03",
      role: "Frontend Developer (Internship)",
      company: "BrainCells",
      location: "Pune Division, Maharashtra, India · Remote",
      type: "Internship",
      description:
        "Built responsive web modules, interactive user flows, and modern Next.js/TypeScript frontend applications.",
      bullets: [
        "Translated design mockups into responsive HTML5, CSS3, and JavaScript/React interfaces.",
        "Contributed to frontend feature additions and bug fixes within a remote agile team setup.",
        "Integrated third-party APIs and managed Git version control workflows.",
      ],
      skills: ["Next.js", "TypeScript", "React.js", "CSS3", "HTML5", "Git"],
    },
  ];

  return (
    <MotionSection id="experience" className="py-24 relative z-10 bg-black text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Nudot Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              WORK & <span className="text-stroke-white">TIMELINE.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-mono leading-relaxed">
            3 years of professional full-time engineering experience architecting web platforms and user experiences.
          </p>
        </div>

        {/* Nudot Editorial List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-black hover:bg-zinc-950 p-8 sm:p-10 rounded-2xl border border-white/15 hover:border-white transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 font-bold uppercase">
                    <span className="text-white">{exp.period}</span>
                    <span>• {exp.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-mono font-bold text-zinc-400">
                    {exp.company} — {exp.location}
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {exp.description}
              </p>

              {/* Bullet points */}
              <div className="space-y-2 pt-2">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    <span className="text-white font-mono font-bold shrink-0 mt-0.5">•</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-zinc-300 uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

