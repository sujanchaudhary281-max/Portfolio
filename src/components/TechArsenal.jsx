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
    { name: 'Docker', icon: 'skill-icons:docker' },
    { name: 'Vite', icon: 'skill-icons:vite-dark' },
    { name: 'Postman', icon: 'skill-icons:postman' },
  ],
};

export default function TechArsenal() {
  const [tab, setTab] = useState('Frontend');

  return (
    <section className="border-b border-hairline py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-primary">Stack</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Tech arsenal
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-body">Tools and frameworks I use to build production-ready products.</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                tab === c
                  ? 'bg-primary text-canvas'
                  : 'border border-hairline text-body hover:border-hairline-strong hover:text-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills[tab].map((s) => (
            <Card key={s.name} className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-white/[0.02]">
                <Icon icon={s.icon} width="24" height="24" />
              </div>
              <span className="text-sm font-medium text-ink">{s.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
