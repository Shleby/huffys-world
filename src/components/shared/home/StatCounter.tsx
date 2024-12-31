"use client";

import { useState, useEffect } from "react";

interface StatCounterProps {
  end: number;
  duration: number;
  label: string;
  plus?: boolean;
  around?: boolean;
}

export function StatCounter({
  end,
  duration,
  label,
  plus,
  around,
}: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-400">
        {around && "~"} {count} {plus && "+"}
      </div>
      <div className="text-sm text-gray-800 dark:text-gray-300 mt-2">
        {label}
      </div>
    </div>
  );
}
