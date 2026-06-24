import { useState } from 'react';
import Card from './UI/Card';
import { Icon } from '@iconify/react';

const categories = ['Frontend', 'Backend', 'Databases', 'Dev Tools'];

const skills = {
  Frontend: [
    { name: 'React.js', icon: 'skill-icons:react-dark' },
    { name: 'React Native', icon: 'skill-icons:react-dark' },
    { name: 'Next.js', icon: 'skill-icons:nextjs-dark' },
    { name: 'TypeScript', icon: 'skill-icons:typescript' },
    { name: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'skill-icons:nodejs-dark' },
    { name: 'Express.js', icon: 'skill-icons:expressjs-dark' },
    { name: 'REST APIs', icon: 'lucide:globe' },
  ],
  Databases: [
    { name: 'MongoDB', icon: 'skill-icons:mongodb' },
    { name: 'PostgreSQL', icon: 'skill-icons:postgresql-dark' },
  ],
  'Dev Tools': [
    { name: 'Git & GitHub', icon: 'skill-icons:github-dark' },
    { name: 'Vite', icon: 'skill-icons:vite-dark' },
    { name: 'Postman', icon: 'skill-icons:postman' },
  ],
};

export default function TechArsenal() {
  const [tab, setTab] = useState('Frontend');

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ letterSpacing: '-0.025em' }}>
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="mt-3 text-sm text-body max-w-md mx-auto">Tools and frameworks I use to build production-ready products.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`rounded-pill px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                tab === c
                  ? 'bg-primary text-canvas btn-glow scale-[1.02]'
                  : 'border border-hairline text-body hover:text-ink hover:border-hairline-strong hover:bg-primary/5'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills[tab].map((s) => (
            <Card key={s.name} className="flex items-center gap-4 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 border border-hairline group-hover:border-primary/30 group-hover:bg-primary/10 transition-all">
                <Icon icon={s.icon} width="26" height="26" />
              </div>
              <span className="text-sm font-semibold text-ink">{s.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
