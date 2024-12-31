import { useEffect, useRef } from "react";

export function SoundWaveParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: { x: number; y: number; radius: number; color: string }[] =
      [];

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height / 2;
      const radius = Math.random() * 3 + 1;
      const color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`;
      particles.push({ x, y, radius, color });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.y =
          canvas.height / 2 + Math.sin(Date.now() * 0.001 + index) * 50;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    for (let i = 0; i < 100; i++) {
      createParticle();
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="w-full" />;
}
