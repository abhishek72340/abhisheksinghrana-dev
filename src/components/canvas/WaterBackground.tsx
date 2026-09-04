"use client";

import React, { useEffect, useRef } from "react";

interface WaveDrop {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export default function WaterBackground() {
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
    const drops: WaveDrop[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.4) {
        drops.push({
          x: e.clientX,
          y: e.clientY,
          radius: 2,
          maxRadius: 60 + Math.random() * 40,
          alpha: 0.6,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Initial random ambient water drops
    for (let i = 0; i < 5; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 20,
        maxRadius: 80 + Math.random() * 50,
        alpha: 0.5,
      });
    }

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Soft Liquid Water Pearl Gradient Base
      const baseGrad = ctx.createLinearGradient(0, 0, width, height);
      baseGrad.addColorStop(0, "#f0f9ff");
      baseGrad.addColorStop(0.5, "#e0f2fe");
      baseGrad.addColorStop(1, "#f8fafc");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Moving Water Waves
      ctx.save();
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const waveHeight = 25 + w * 15;
        const waveSpeed = time * (0.8 + w * 0.3);

        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 30) {
          const y =
            Math.sin(x * 0.004 + waveSpeed) * waveHeight +
            Math.cos(x * 0.002 + waveSpeed * 0.8) * (waveHeight * 0.5) +
            (height * (0.3 + w * 0.25));
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);

        const waveGrad = ctx.createLinearGradient(0, 0, width, height);
        if (w === 0) waveGrad.addColorStop(0, "rgba(56, 189, 248, 0.15)");
        else if (w === 1) waveGrad.addColorStop(0, "rgba(14, 165, 233, 0.12)");
        else waveGrad.addColorStop(0, "rgba(37, 99, 235, 0.08)");
        waveGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = waveGrad;
        ctx.fill();
      }
      ctx.restore();

      // Render Interactive Water Ripples
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.radius += 1.2;
        d.alpha -= 0.008;

        if (d.alpha <= 0 || d.radius >= d.maxRadius) {
          drops.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(14, 165, 233, ${d.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${d.alpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Add rare ambient water drops
      if (Math.random() < 0.03 && drops.length < 15) {
        drops.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 2,
          maxRadius: 50 + Math.random() * 50,
          alpha: 0.5,
        });
      }

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
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
