"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; z: number; r: number; gold: boolean };

export default function CrystalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 800px)").matches;

    const layers = mobile ? 4 : 6;
    const spread = mobile ? 4 : 5;
    const nodes: Node[] = [];

    for (let z = -layers; z <= layers; z += 1) {
      for (let x = -spread; x <= spread; x += 1) {
        for (let y = -spread; y <= spread; y += 2) {
          if ((x + y + z) % 2 !== 0) continue;
          nodes.push({
            x: x * 42 + (Math.random() - 0.5) * 8,
            y: y * 36 + (Math.random() - 0.5) * 8,
            z: z * 58 + (Math.random() - 0.5) * 10,
            r: 1.6 + Math.random() * 2.4,
            gold: Math.random() < 0.08,
          });
        }
      }
    }

    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const driftX = reduced ? 0 : Math.sin(t * 0.0002) * 18;
      const driftY = reduced ? 0 : Math.cos(t * 0.00017) * 14;
      const driftZ = reduced ? 0 : Math.sin(t * 0.00013) * 20;

      for (const n of nodes) {
        const z = n.z + driftZ;
        const depth = 420 / (420 + z + 420);
        const sx = w * 0.5 + (n.x + driftX) * depth;
        const sy = h * 0.5 + (n.y + driftY) * depth;
        const radius = n.r * depth * 1.8;

        if (sx < -30 || sx > w + 30 || sy < -30 || sy > h + 30) continue;

        const alpha = Math.max(0.06, Math.min(0.34, depth * 0.34));
        const color = n.gold
          ? `rgba(255,201,4,${alpha * 0.7})`
          : `rgba(88,208,255,${alpha})`;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 16;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="crystalCanvas" aria-hidden="true" />;
}
