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

    const grid = mobile ? 7 : 10;
    const layers = mobile ? 8 : 12;
    const spacingX = mobile ? 80 : 96;
    const spacingY = mobile ? 64 : 78;
    const spacingZ = mobile ? 120 : 146;

    const nodes: Node[] = [];
    for (let z = -layers; z <= layers; z += 1) {
      for (let x = -grid; x <= grid; x += 1) {
        for (let y = -grid; y <= grid; y += 1) {
          if ((x + y + z) % 2 !== 0) continue;
          nodes.push({
            x: x * spacingX + (Math.random() - 0.5) * 20,
            y: y * spacingY + (Math.random() - 0.5) * 20,
            z: z * spacingZ + (Math.random() - 0.5) * 24,
            r: 1.1 + Math.random() * 2.1,
            gold: Math.random() < 0.07,
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

      const camZ = 980;
      const driftX = reduced ? 0 : Math.sin(t * 0.00016) * 46;
      const driftY = reduced ? 0 : Math.cos(t * 0.00013) * 30;
      const driftZ = reduced ? 0 : Math.sin(t * 0.00011) * 120;

      for (const n of nodes) {
        const pz = n.z + driftZ;
        const perspective = camZ / (camZ + pz + 1400);
        const sx = w * 0.5 + (n.x + driftX) * perspective;
        const sy = h * 0.5 + (n.y + driftY) * perspective;
        const radius = n.r * perspective * 2.7;

        if (sx < -40 || sx > w + 40 || sy < -40 || sy > h + 40) continue;

        const alpha = Math.max(0.035, Math.min(0.23, perspective * 0.28));
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
