'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export const MouseGlowCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const themeRef = useRef<'light' | 'dark' | undefined>('dark');

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    themeRef.current = resolvedTheme as 'light' | 'dark' | undefined;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let frame: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const { x, y } = mouse.current;
      const isDark = themeRef.current === 'dark';
      const glowColor = isDark ? [255, 255, 255] : [0, 0, 0];

      const rings = [
        { radius: 250, alpha: 0.025 },
        { radius: 500, alpha: 0.015 },
        { radius: 850, alpha: 0.008 },
        { radius: 1300, alpha: 0.005 },
        { radius: 1800, alpha: 0.003 },
      ];

      rings.forEach(({ radius, alpha }) => {
        const [r, g, b] = glowColor;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
      aria-hidden="true"
    />
  );
};
