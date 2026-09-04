"use client";

import React, { useState } from "react";
import BlackAndWhiteBackground from "@/components/canvas/BlackAndWhiteBackground";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogsSection from "@/components/sections/BlogsSection";
import Interactive3DPlayground from "@/components/sections/Interactive3DPlayground";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ResumeModal from "@/components/sections/ResumeModal";
import CustomCursor from "@/components/ui/CustomCursor";
import IntroLoader from "@/components/ui/IntroLoader";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Nudot Opening Curtain Loader */}
      <IntroLoader />

      {/* Nudot Trailing Custom Cursor */}
      <CustomCursor />

      {/* Strict Black & White Background */}
      <BlackAndWhiteBackground />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* About Section */}
      <AboutSection />

      {/* Tech Stack Matrix */}
      <TechStackSection />

      {/* Career Experience Timeline */}
      <ExperienceSection />

      {/* Featured Projects Showcase */}
      <ProjectsSection />

      {/* Technical Articles & Hashnode Publications */}
      <BlogsSection />

      {/* Interactive 3D Graphics Sandbox */}
      <Interactive3DPlayground />

      {/* Contact Hub */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Printable Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
}

