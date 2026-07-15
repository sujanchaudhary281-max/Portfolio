import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Card from './UI/Card';
import Button from './UI/Button';
import projects from '../assets/projects.json';
import FadeIn from './FadeIn';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="border-b border-hairline py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-primary">Work</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Featured projects
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-body">Selected work showcasing end-to-end delivery.</p>
          </div>
          <Link to="/more-projects" className="group flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light">
            View all <Icon icon="lucide:arrow-right" width="14" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <FadeIn key={p.id} delay={i * 80}>
              <Card className="group flex h-full flex-col !p-0 overflow-hidden">
              <div className="relative h-44 overflow-hidden border-b border-hairline">
                <img src={p.imgUrl} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {p.techStacks.split(',').map((t) => (
                    <span key={t} className="rounded-md border border-hairline px-2 py-0.5 text-[10px] font-medium text-body">{t.trim()}</span>
                  ))}
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-ink">{p.title}</h3>
                <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-body">{p.description}</p>
                <div className="mt-auto flex gap-2.5 pt-1">
                  <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="secondary" className="w-full text-xs !px-3 !py-2"><Icon icon="mingcute:github-line" width="14" /> Code</Button>
                  </a>
                  {p.liveLink ? (
                    <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full text-xs !px-3 !py-2">Live <Icon icon="lucide:external-link" width="12" /></Button>
                    </a>
                  ) : (
                    <Button disabled className="flex-1 text-xs !px-3 !py-2 opacity-40 cursor-not-allowed">Under Maintenance</Button>
                  )}
                </div>
              </div>
            </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
