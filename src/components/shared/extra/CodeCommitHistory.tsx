import { useEffect, useRef } from 'react';

const commitHistory = [
  { date: '2023-05-01', commits: 5 },
  { date: '2023-05-02', commits: 3 },
  { date: '2023-05-03', commits: 7 },
  { date: '2023-05-04', commits: 2 },
  { date: '2023-05-05', commits: 6 },
  { date: '2023-05-06', commits: 4 },
  { date: '2023-05-07', commits: 8 },
];

export function CodeCommitHistory() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawCommit = (x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      commitHistory.forEach((day, index) => {
        const x = (index + 1) * (canvas.width / (commitHistory.length + 1));
        const y = canvas.height / 2 + Math.sin(Date.now() * 0.001 + index) * 30;
        const size = day.commits * 2;
        drawCommit(x, y, size);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={256} height={256} className="bg-gray-900" />;
}

