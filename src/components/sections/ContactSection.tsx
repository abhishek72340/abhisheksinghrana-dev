"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { soundFx } from "@/utils/audio";
import confetti from "canvas-confetti";
import {
  FaEnvelope,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaClock,
  FaSpinner,
} from "react-icons/fa";
import { SiLeetcode, SiHashnode } from "react-icons/si";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const realEmail = "abhisingh.72340@gmail.com";

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(realEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    setIsSubmitting(true);

    try {
      // Send directly to abhisingh.72340@gmail.com via FormSubmit AJAX service
      const res = await fetch("https://formsubmit.co/ajax/abhisingh.72340@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || "New Portfolio Contact Message from " + formData.name,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (res.ok) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback to mailto link
        window.location.href = `mailto:${realEmail}?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact"
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
        setSubmitted(true);
      }
    } catch {
      // Fallback mailto trigger
      window.location.href = `mailto:${realEmail}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <MotionSection id="contact" className="py-24 relative z-10 bg-black text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Nudot Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              START A <span className="text-stroke-white">PROJECT.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-mono leading-relaxed">
            Open for full-time Software Engineer opportunities, tech collaborations, and direct messages sent straight to <strong className="text-white">abhisingh.72340@gmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 bg-zinc-950 p-8 sm:p-10 rounded-2xl border border-white/15 space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">REACH OUT</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Send a direct message through the form or email directly to <span className="text-white font-mono">{realEmail}</span>.
              </p>
            </div>

            <div className="space-y-4 font-mono">
              {/* Copy Email Widget */}
              <div className="p-4 rounded-xl bg-black border border-white/10 flex items-center justify-between">
                <div className="truncate pr-2">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">EMAIL ADDRESS</span>
                  <span className="text-xs sm:text-sm font-bold text-white truncate block">
                    {realEmail}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white text-zinc-300 hover:text-black transition-all shrink-0 border border-white/15"
                  title="Copy email"
                >
                  {copied ? <FaCheck className="text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-black border border-white/10 space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">LOCATION</span>
                <span className="text-xs sm:text-sm font-bold text-white">India [ Open to Remote & Relocation ]</span>
              </div>
            </div>

            {/* Profiles */}
            <div className="pt-4 border-t border-white/10 space-y-3 font-mono">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">VERIFIED PROFILES</span>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://github.com/abhishek72340"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-4 py-2 rounded-full bg-black hover:bg-white hover:text-black text-white border border-white/15 transition-all text-xs font-bold uppercase"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-singh-rana-6354a9180/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-4 py-2 rounded-full bg-black hover:bg-white hover:text-black text-white border border-white/15 transition-all text-xs font-bold uppercase"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://leetcode.com/u/user1557Uf/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-4 py-2 rounded-full bg-black hover:bg-white hover:text-black text-white border border-white/15 transition-all text-xs font-bold uppercase"
                >
                  LEETCODE
                </a>
                <a
                  href="https://hashnode.com/@abhishek72340"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-4 py-2 rounded-full bg-black hover:bg-white hover:text-black text-white border border-white/15 transition-all text-xs font-bold uppercase"
                >
                  HASHNODE
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-zinc-950 p-8 sm:p-10 rounded-2xl border border-white/15 space-y-6">
            <h3 className="text-2xl font-black uppercase text-white tracking-tight">SEND A MESSAGE</h3>

            {submitted && (
              <div className="p-4 rounded-xl bg-white text-black text-xs font-mono font-bold flex items-center gap-3">
                <FaCheck className="text-base" />
                <span>Message dispatched! It has been sent directly to {realEmail}.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest block">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="NAME..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/15 text-white text-xs font-mono placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors uppercase"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest block">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="EMAIL@DOMAIN.COM..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/15 text-white text-xs font-mono placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors uppercase"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest block">SUBJECT</label>
                <input
                  type="text"
                  required
                  placeholder="SOFTWARE ENGINEER ROLE / INQUIRY..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/15 text-white text-xs font-mono placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors uppercase"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest block">MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  placeholder="WRITE YOUR MESSAGE HERE..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/15 text-white text-xs font-mono placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors uppercase resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => soundFx.playHover()}
                className="w-full py-4 rounded-full bg-white hover:bg-zinc-200 disabled:bg-zinc-500 text-black font-mono font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-xs" />
                    <span>SENDING TO {realEmail}...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE </span>
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}


