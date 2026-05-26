"use client";

import { useEffect, useRef, useState } from "react";

type Particle = { angle: number; speed: number; orbit: number; size: number };

export default function AtomBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = Array.from({ length: 14 }).map((_, i) => ({
      angle: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.003,
      orbit: 60 + (i % 5) * 26,
      size: 1.2 + Math.random() * 1.8,
    }));

    let raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const cx = width * 0.65;
      const cy = height * 0.42;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(69,207,255,0.2)";
      ctx.lineWidth = 1;
      [78, 108, 138].forEach((orbit, idx) => {
        ctx.beginPath();
        ctx.ellipse(cx, cy, orbit, orbit * (0.6 + idx * 0.08), (idx * Math.PI) / 3, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.fillStyle = "rgba(255,201,4,0.35)";
      ctx.beginPath();
      ctx.arc(cx, cy, 11, 0, Math.PI * 2);
      ctx.fill();

      particles.forEach((p, idx) => {
        if (!reducedMotion) p.angle += p.speed;
        const tilt = (idx % 3) * 0.95;
        const x = cx + Math.cos(p.angle) * p.orbit;
        const y = cy + Math.sin(p.angle + tilt) * (p.orbit * 0.58);
        ctx.fillStyle = idx % 2 === 0 ? "rgba(69,207,255,0.9)" : "rgba(179,241,255,0.7)";
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reducedMotion) raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="atomCanvas" aria-hidden="true" />;
}
