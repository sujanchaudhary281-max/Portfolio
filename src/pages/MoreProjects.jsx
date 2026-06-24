import { useState } from 'react';
import { Icon } from '@iconify/react';
import projects from '../assets/projects.json';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import FadeIn from '../components/FadeIn';

export default function MoreProjects() {
  const [search, setSearch] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');

  const allTechs = ['All', ...new Set(projects.flatMap(p => p.techStacks.split(',').map(t => t.trim())))];

  const filtered = projects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.techStacks.toLowerCase().includes(search.toLowerCase());
    const matchTech = selectedTech === 'All' || p.techStacks.split(',').map(t => t.trim()).includes(selectedTech);
    return matchSearch && matchTech;
  });

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>
              Project <span className="gradient-text">Archive</span>
            </h1>
            <p className="mt-2 text-sm text-body max-w-lg">All projects I've built — web apps, mobile apps, and open-source tools.</p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 pb-6 border-b border-hairline">
            <div className="flex flex-wrap gap-2">
              {allTechs.slice(0, 6).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`rounded-pill px-4 py-1.5 text-xs font-semibold transition-all ${selectedTech === tech ? 'bg-primary text-canvas btn-glow' : 'border border-hairline text-body hover:text-ink hover:border-hairline-strong'}`}
                >
                  {tech}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-mute" width="16" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-pill border border-hairline bg-canvas-soft pl-9 pr-4 py-2 text-xs text-ink placeholder:text-mute/60 outline-none focus:border-primary"
              />
            </div>
          </div>
        </FadeIn>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * 70}>
                <Card className="flex flex-col !p-0 overflow-hidden group h-full">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.imgUrl} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas-card via-canvas-card/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {p.techStacks.split(',').map((t) => (
                        <span key={t} className="rounded-pill bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">{t.trim()}</span>
                      ))}
                    </div>
                    <h3 className="font-display text-base font-bold text-ink mb-1">{p.title}</h3>
                    <p className="text-xs text-body leading-relaxed line-clamp-2 mb-2">{p.description}</p>
                    <div className="mt-auto flex gap-2 pt-3">
                      <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="secondary" className="w-full text-xs !px-3 !py-1.5"><Icon icon="mingcute:github-line" width="14" /> Code</Button>
                      </a>
                      {p.liveLink ? (
                        <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button className="w-full text-xs !px-3 !py-1.5">Live <Icon icon="lucide:external-link" width="12" /></Button>
                        </a>
                      ) : (
                        <Button variant="secondary" disabled className="flex-1 text-xs !px-3 !py-1.5 opacity-40">Offline</Button>
                      )}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="flex flex-col items-center justify-center py-16 text-center gap-3 border border-dashed border-hairline rounded-xl">
              <Icon icon="lucide:folder-open" className="text-primary/30" width="40" />
              <p className="text-sm text-body">No projects found.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
