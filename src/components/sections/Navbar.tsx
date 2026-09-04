"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { soundFx } from "@/utils/audio";
import {
  FaVolumeUp,
  FaVolumeMute,
  FaBars,
  FaTimes,
  FaFileDownload,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundFx.enabled = nextState;
    if (nextState) soundFx.playClick();
  };

  const navLinks = [
    { num: "01", name: "About", href: "#about" },
    { num: "02", name: "Skills", href: "#skills" },
    { num: "03", name: "Experience", href: "#experience" },
    { num: "04", name: "Projects", href: "#projects" },
    { num: "05", name: "Blogs", href: "#blogs" },
    { num: "06", name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Nudot Brand Header Logo */}
        <a
          href="#"
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-3.5 group"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/40 group-hover:border-white transition-colors">
            <Image
              src="/profile.jpeg"
              alt="Abhishek Singh Rana"
              width={36}
              height={36}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-black tracking-widest text-white uppercase font-mono">
              ABHISHEK <span className="text-zinc-400 font-normal">SINGH RANA</span>
            </span>
          </div>
        </a>

        {/* Nudot Editorial Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/80 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className="px-3.5 py-1.5 text-[11px] font-mono tracking-widest text-zinc-400 hover:text-white uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-full bg-white/5 border border-white/15 text-white"
          >
            {mobileMenuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/15 px-6 pt-4 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-4 py-3 text-xs font-mono tracking-widest text-zinc-300 hover:text-white border-b border-white/10 uppercase"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

