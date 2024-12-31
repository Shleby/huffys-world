"use client";

import { useRef, useEffect } from "react";

export default function DoodlePad() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let drawing = false;

    const startDrawing = () => (drawing = true);
    const stopDrawing = () => (drawing = false);
    const draw = (e: MouseEvent) => {
      if (!drawing) return;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "black";
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={300} height={200} className="border" />
      <button
        onClick={() =>
          canvasRef.current?.getContext("2d")!.clearRect(0, 0, 300, 200)
        }
        className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
      >
        Clear
      </button>
    </div>
  );
}
