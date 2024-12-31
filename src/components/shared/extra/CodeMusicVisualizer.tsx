"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const notes = ["C", "D", "E", "F", "G", "A", "B"];
const codeSnippets = [
  "function playNote(frequency) { ... }",
  "class Synthesizer extends AudioNode { ... }",
  'const chord = new Chord("Cmaj7");',
  "audioContext.createOscillator();",
  "function applyReverb(audioBuffer) { ... }",
  "const midiMessage = [0x90, 60, 127];",
  "function quantizeNotes(notes, grid) { ... }",
];

export function CodeMusicVisualizer() {
  const [activeNote, setActiveNote] = useState<number | null>(null);

  return (
    <div className="w-full h-64 bg-neutral-200 dark:bg-neutral-800 rounded-lg p-4 overflow-hidden">
      <div className="flex justify-between h-full">
        {notes.map((note, index) => (
          <div
            key={note}
            className="flex flex-col justify-end items-center w-12"
          >
            <motion.div
              className="w-full bg-blue-500 dark:bg-blue-400 rounded-t-md cursor-pointer"
              style={{ height: `${(index + 1) * 10}%` }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setActiveNote(index)}
              onHoverEnd={() => setActiveNote(null)}
            >
              <div className="text-center text-white font-bold">{note}</div>
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        className="mt-4 h-16 bg-neutral-300 dark:bg-neutral-700 rounded p-2 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: activeNote !== null ? 1 : 0,
          y: activeNote !== null ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <code className="text-sm text-neutral-800 dark:text-neutral-200">
          {activeNote !== null ? codeSnippets[activeNote] : ""}
        </code>
      </motion.div>
    </div>
  );
}
