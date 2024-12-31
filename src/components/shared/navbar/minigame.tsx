"use client";

import { useState, useRef, useEffect } from "react";

export default function MiniGame() {
  const [score, setScore] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    let ballX = 50;
    let ballY = 50;
    let ballDX = 2;
    let ballDY = 2;

    const draw = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.beginPath();
      ctx!.arc(ballX, ballY, 10, 0, Math.PI * 2);
      ctx!.fillStyle = "blue";
      ctx!.fill();
      ballX += ballDX;
      ballY += ballDY;

      if (ballX + 10 > canvas!.width || ballX - 10 < 0) ballDX = -ballDX;
      if (ballY + 10 > canvas!.height || ballY - 10 < 0) ballDY = -ballDY;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} width={200} height={200} />
      <button
        onClick={() => setScore(score + 1)}
        className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded"
      >
        Score: {score}
      </button>
    </div>
  );
}
