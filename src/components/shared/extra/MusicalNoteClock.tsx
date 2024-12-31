import { useState, useEffect } from "react";

const noteNames = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G"];

export function MusicalNoteClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();

  return (
    <div className="w-64 h-64 rounded-full border-4 border-blue-500 flex items-center justify-center relative">
      {noteNames.map((note, index) => (
        <div
          key={index}
          className="absolute text-lg font-bold"
          style={{
            transform: `rotate(${index * 30}deg) translateY(-120px) rotate(-${
              index * 30
            }deg)`,
          }}
        >
          {note}
        </div>
      ))}
      <div
        className="absolute w-1 h-16 bg-red-500 origin-bottom"
        style={{ transform: `rotate(${(hour + minute / 60) * 30}deg)` }}
      />
      <div
        className="absolute w-1 h-24 bg-green-500 origin-bottom"
        style={{ transform: `rotate(${minute * 6}deg)` }}
      />
      <div
        className="absolute w-px h-28 bg-blue-500 origin-bottom"
        style={{ transform: `rotate(${second * 6}deg)` }}
      />
    </div>
  );
}
