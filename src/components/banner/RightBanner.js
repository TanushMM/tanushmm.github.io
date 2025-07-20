import React, { useEffect, useState } from 'react';

const sequences = [
  [
    "tanush@portfolio:~$ uvicorn main:app --reload",
    "INFO:     Will watch for changes in 'main.py'",
    "INFO:     Uvicorn running on http://127.0.0.1:8000",
    "INFO:     Started reloader process",
    "INFO:     Started server process",
    "INFO:     Application startup complete.",
  ],
  [
    "tanush@trading-bot:~$ python execute_trades.py",
    "🟢 Connecting to broker API...",
    "📊 Fetching latest market data...",
    "💡 Strategy triggered: Mean Reversion",
    "✅ Order placed: BUY 10 AAPL @ $190.32",
    "📦 Logging trade to database...",
    "✨ Trade cycle complete.",
  ],
  [
    "tanush@infra:~$ docker run -d -p 8080:80 backend-service",
    "🟢 Starting backend container...",
    "🔁 Connecting to message broker...",
    "✅ Connected to PostgreSQL database",
    "⚡ Server listening on port 8080",
    "✨ System running smoothly!",
  ],
];

const RightBanner = () => {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const currentSequence = sequences[sequenceIndex];

    const interval = setInterval(() => {
      if (lineIndex < currentSequence.length) {
        setDisplayedLines((prev) => [...prev, currentSequence[lineIndex]]);
        setLineIndex((prev) => prev + 1);
      } else {
        // Wait a bit, then clear and move to next sequence
        setTimeout(() => {
          setDisplayedLines([]);
          setLineIndex(0);
          setSequenceIndex((prev) => (prev + 1) % sequences.length);
        }, 2000);
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [lineIndex, sequenceIndex]);

  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-black text-white font-mono text-sm rounded-md shadow-lg p-6 h-64 overflow-y-auto">
        {displayedLines.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">
            {line}
          </div>
        ))}
        {displayedLines.length < sequences[sequenceIndex].length && (
          <span className="animate-pulse text-gray-400">▍</span>
        )}
      </div>
    </div>
  );
};

export default RightBanner;
