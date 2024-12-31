import { useState, useEffect } from 'react';

const equations = [
  'f = 440 * 2^(n/12)',
  'T = 1 / f',
  'v = f * λ',
  'I = I₀ * 10^(β/10)',
  'L = 20 * log₁₀(p/p₀)',
];

export function MusicalMathEquations() {
  const [currentEquation, setCurrentEquation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEquation((prev) => (prev + 1) % equations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-64 h-64 bg-gray-800 rounded-lg flex justify-center items-center">
      <div className="text-2xl font-mono text-green-400">{equations[currentEquation]}</div>
    </div>
  );
}

