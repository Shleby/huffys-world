"use client";

import { useRef, useEffect } from "react";

export function GlowingOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;

      const { left, top, width, height } =
        orbRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (e.clientX - centerX) / 20;
      const deltaY = (e.clientY - centerY) / 20;

      orbRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${
        1 + Math.sin(Date.now() / 1000) * 0.05
      })`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const pulseAnimation = () => {
      if (orbRef.current) {
        const scale = 1 + Math.sin(Date.now() / 1000) * 0.05;
        orbRef.current.style.transform = `scale(${scale})`;
      }
      requestAnimationFrame(pulseAnimation);
    };

    const animationId = requestAnimationFrame(pulseAnimation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="absolute inset-2 rounded-full bg-white opacity-30 blur-md" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-black opacity-30" />
    </div>
  );
}
