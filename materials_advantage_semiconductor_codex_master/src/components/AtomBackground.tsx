"use client";

import { useEffect, useRef, useState } from "react";

type Particle = {
  radius: number;
  angle: number;
  speed: number;
  orbit: number;
  size: number;
};

export default function AtomBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    setEnabled(!reducedMotion && !isSmallScreen);
  }, []);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = Array.from({ length: 12 }).map((_, i) => ({
      radius: i % 3,
      angle: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.004,
      orbit: 70 + (i % 4) * 28 + Math.random() * 12,
      size: 1.2 + Math.random() * 1.6,
    }));

    let frame = 0;
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
      const cx = width * 0.76;
      const cy = height * 0.38;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(53,200,255,0.15)";
      ctx.lineWidth = 1;
      [80, 110, 140].forEach((orbit, idx) => {
        ctx.beginPath();
        ctx.ellipse(cx, cy, orbit, orbit * (0.55 + idx * 0.1), (idx * Math.PI) / 3, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.fillStyle = "rgba(255,201,4,0.35)";
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fill();

      particles.forEach((p, idx) => {
        p.angle += p.speed;
        const tilt = (idx % 3) * 0.95;
        const x = cx + Math.cos(p.angle) * p.orbit;
        const y = cy + Math.sin(p.angle + tilt) * (p.orbit * 0.55);
        ctx.fillStyle = p.radius === 0 ? "rgba(53,200,255,0.78)" : "rgba(185,255,223,0.6)";
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      frame += 1;
      if (frame % 3 === 0) {
        ctx.fillStyle = "rgba(53,200,255,0.06)";
        for (let i = 0; i < 8; i += 1) {
          const sx = Math.random() * width;
          const sy = Math.random() * height;
          ctx.fillRect(sx, sy, 1, 1);
        }
      }

      raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} className="atomCanvas" aria-hidden="true" />;
}
