import { useEffect, useState } from 'react';

const lines = [
  { text: '$ npx sujan init --portfolio', type: 'cmd' },
  { text: '✔ Loading configurations...', type: 'ok', delay: 600 },
  { text: '✔ Systems verified.', type: 'ok', delay: 1000 },
  { text: '→ Status: Available for hire', type: 'info', delay: 1400 },
  { text: '→ Stack: React, React Native, Next.js, Node.js', type: 'info', delay: 1800 },
  { text: '✨ Ready to build.', type: 'ok', delay: 2200 },
];

export default function Terminal() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const timers = lines.map((l, i) =>
      setTimeout(() => setVisible((p) => [...p, l]), l.delay || i * 400)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-md rounded-xl border border-hairline-strong bg-canvas-soft/90 backdrop-blur-sm font-mono text-xs overflow-hidden green-glow">
      <div className="flex items-center gap-1.5 border-b border-hairline px-4 py-2.5 bg-canvas-card/50">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-primary/80" />
        <span className="ml-auto text-[10px] text-mute font-medium">sujan@dev ~ terminal</span>
      </div>
      <div className="flex flex-col gap-2 p-5 min-h-[160px]">
        {visible.map((l, i) => (
          <span key={i} className={l.type === 'cmd' ? 'text-primary font-semibold' : l.type === 'ok' ? 'text-primary-light' : 'text-body'}>
            {l.text}
          </span>
        ))}
        {visible.length < lines.length && <span className="h-4 w-2 bg-primary animate-pulse rounded-sm" />}
      </div>
    </div>
  );
}
