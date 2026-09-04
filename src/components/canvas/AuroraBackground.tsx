"use client";

import React, { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let time = 0;
    const mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Glowing organic fluid orbs
    const blobs = [
      { x: width * 0.2, y: height * 0.3, radius: 350, color: "rgba(6, 182, 212, 0.18)", vx: 0.3, vy: 0.2 },
      { x: width * 0.8, y: height * 0.2, radius: 400, color: "rgba(139, 92, 246, 0.18)", vx: -0.2, vy: 0.3 },
      { x: width * 0.5, y: height * 0.7, radius: 380, color: "rgba(59, 130, 246, 0.16)", vx: 0.25, vy: -0.25 },
      { x: width * 0.3, y: height * 0.8, radius: 320, color: "rgba(16, 185, 129, 0.12)", vx: -0.3, vy: -0.2 },
    ];

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Deep rich base fill
      ctx.fillStyle = "#07080e";
      ctx.fillRect(0, 0, width, height);

      // Render organic aurora fluid meshes
      blobs.forEach((b, idx) => {
        b.x += Math.sin(time + idx) * 0.8 + b.vx;
        b.y += Math.cos(time + idx) * 0.8 + b.vy;

        // Keep blobs within bounds
        if (b.x < -100 || b.x > width + 100) b.vx *= -1;
        if (b.y < -100 || b.y > height + 100) b.vy *= -1;

        // Subtle cursor attraction
        const dx = mouse.x - b.x;
        const dy = mouse.y - b.y;
        b.x += dx * 0.002;
        b.y += dy * 0.002;

        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        gradient.addColorStop(0, b.color);
        gradient.addColorStop(0.5, b.color.replace(/[\d\.]+\)$/, "0.08)"));
        gradient.addColorStop(1, "rgba(7, 8, 14, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
    />
  );
}
