import { useState, useEffect } from 'react';

const codeSnippets = [
  `function playNote(frequency) {
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5);
}`,
  `class Synthesizer extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // Synthesizer logic here
    return true;
  }
}`,
  `const midiToFrequency = (midiNote) => {
  return 440 * Math.pow(2, (midiNote - 69) / 12);
};`,
];

export function CodeBlockDisplay() {
  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-64 h-64 bg-gray-800 rounded-lg p-4 overflow-hidden">
      <pre className="text-green-400 text-xs">
        <code>{codeSnippets[currentSnippet]}</code>
      </pre>
    </div>
  );
}

