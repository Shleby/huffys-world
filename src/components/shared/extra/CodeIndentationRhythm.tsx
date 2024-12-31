import { useState, useEffect } from 'react';

const codeLines = [
  'function playMelody() {',
  '  const notes = [C4, E4, G4];',
  '  for (const note of notes) {',
  '    playNote(note);',
  '    wait(0.5);',
  '  }',
  '}',
];

export function CodeIndentationRhythm() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev.length === codeLines.length) {
          return [];
        }
        return [...prev, prev.length];
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-64 h-64 bg-gray-800 p-4 font-mono text-sm overflow-hidden">
      {codeLines.map((line, index) => (
        <div
          key={index}
          className={`transition-opacity duration-300 ${
            visibleLines.includes(index) ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-green-400">{line}</span>
        </div>
      ))}
    </div>
  );
}

