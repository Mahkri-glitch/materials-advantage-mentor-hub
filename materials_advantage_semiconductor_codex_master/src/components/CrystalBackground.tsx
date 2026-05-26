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

    const spacing = mobile ? 74 : 86;
    const xMin = -18, xMax = 18;
    const yMin = -12, yMax = 12;
    const zMin = -18, zMax = 8;

    const nodes: Node[] = [];
    for (let xi = xMin; xi <= xMax; xi += mobile ? 2 : 1) {
      for (let yi = yMin; yi <= yMax; yi += mobile ? 2 : 1) {
        for (let zi = zMin; zi <= zMax; zi += mobile ? 2 : 1) {
          // keep ordered planes but limit density with deterministic parity mask
          if (((xi + yi + zi) & 1) !== 0) continue;
          const jitter = 0.12;
          nodes.push({
            x: xi * spacing + ((xi * 13 + yi * 7 + zi * 3) % 5 - 2) * jitter,
            y: yi * spacing + ((xi * 5 + yi * 11 + zi * 2) % 5 - 2) * jitter,
            z: zi * spacing + ((xi * 17 + yi * 19 + zi * 23) % 5 - 2) * jitter,
            r: 1.65,
            gold: (xi * 31 + yi * 17 + zi * 13) % 29 === 0,
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
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const camZ = 1700;
      const driftX = reduced ? 0 : Math.sin(t * 0.00009) * 26;
      const driftY = reduced ? 0 : Math.cos(t * 0.00008) * 20;
      const driftZ = reduced ? 0 : Math.sin(t * 0.00006) * 60;

      for (const n of nodes) {
        const pz = n.z + driftZ;
        const perspective = camZ / (camZ + pz + 2200);
        const sx = w * 0.5 + (n.x + driftX) * perspective;
        const sy = h * 0.5 + (n.y + driftY) * perspective;
        const radius = n.r * perspective * 2.65;

        if (sx < -30 || sx > w + 30 || sy < -30 || sy > h + 30) continue;

        const alpha = Math.max(0.03, Math.min(0.2, perspective * 0.22));
        ctx.fillStyle = n.gold ? `rgba(255,201,4,${alpha * 0.72})` : `rgba(88,208,255,${alpha})`;
        ctx.beginPath();
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
