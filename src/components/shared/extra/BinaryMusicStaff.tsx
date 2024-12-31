export function BinaryMusicStaff() {
  return (
    <div className="w-64 h-64 flex flex-col justify-center">
      {[0, 1, 2, 3, 4].map((line) => (
        <div key={line} className="flex items-center">
          <div className="w-full h-px bg-gray-400 mr-2" />
          <div className="text-xs font-mono">
            {Array.from({ length: 8 }, () => Math.round(Math.random())).join('')}
          </div>
        </div>
      ))}
    </div>
  );
}

