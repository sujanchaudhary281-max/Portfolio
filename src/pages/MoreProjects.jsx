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
    <div className="min-h-screen py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-primary">Archive</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Project archive
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-body">All projects I've built — web apps, mobile apps, and open-source tools.</p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-hairline pb-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {allTechs.slice(0, 6).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${selectedTech === tech ? 'bg-primary text-canvas' : 'border border-hairline text-body hover:text-ink hover:border-hairline-strong'}`}
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
                className="w-full rounded-lg border border-hairline bg-canvas-soft pl-9 pr-4 py-2 text-xs text-ink placeholder:text-mute outline-none transition-colors focus:border-primary/60"
              />
            </div>
          </div>
        </FadeIn>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * 60}>
                <Card className="group flex h-full flex-col !p-0 overflow-hidden">
                  <div className="relative h-44 overflow-hidden border-b border-hairline">
                    <img src={p.imgUrl} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {p.techStacks.split(',').map((t) => (
                        <span key={t} className="rounded-md border border-hairline px-2 py-0.5 text-[10px] font-medium text-body">{t.trim()}</span>
                      ))}
                    </div>
                    <h3 className="mb-1 font-display text-base font-semibold text-ink">{p.title}</h3>
                    <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-body">{p.description}</p>
                    <div className="mt-auto flex gap-2 pt-1">
                      {p.githubLink ? (
                        <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="secondary" className="w-full text-xs !px-3 !py-1.5"><Icon icon="mingcute:github-line" width="14" /> Code</Button>
                        </a>
                      ) : (
                        <Button disabled variant="secondary" className="flex-1 text-xs !px-3 !py-1.5 opacity-40 cursor-not-allowed"><Icon icon="mingcute:github-line" width="14" /> Code</Button>
                      )}
                      {p.liveLink ? (
                        <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button className="w-full text-xs !px-3 !py-1.5">Live <Icon icon="lucide:external-link" width="12" /></Button>
                        </a>
                      ) : (
                        <Button disabled className="flex-1 text-xs !px-3 !py-1.5 opacity-40 cursor-not-allowed">Under Maintenance</Button>
                      )}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-hairline py-16 text-center">
              <Icon icon="lucide:folder-open" className="text-mute" width="36" />
              <p className="text-sm text-body">No projects found.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
