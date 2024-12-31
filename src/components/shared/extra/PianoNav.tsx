"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", note: "C" },
  { label: "About", note: "D" },
  { label: "Projects", note: "E" },
  { label: "Skills", note: "F" },
  { label: "Contact", note: "G" },
];

export function PianoNav() {
  const [hoveredKey, setHoveredKey] = useState<number | null>(null);

  return (
    <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 transition-transform duration-500 translate-x-0">
      <ul className="space-y-1">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.label.toLowerCase()}`}
              className="group flex items-center"
              onMouseEnter={() => setHoveredKey(index)}
              onMouseLeave={() => setHoveredKey(null)}
            >
              <div
                className={`w-12 h-16 bg-white border border-gray-300 flex items-center justify-center transition-all duration-300 ${
                  hoveredKey === index ? "bg-blue-200" : ""
                }`}
              >
                <span className="text-black font-bold">{item.note}</span>
              </div>
              <span className="ml-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
