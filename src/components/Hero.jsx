import Button from './UI/Button';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-body">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for new work
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Building digital products with precision.
          </h1>

          <p className="max-w-md text-base leading-relaxed text-body">
            I'm <span className="font-medium text-ink">Sujan Chaudhary</span>, a developer working
            across React, React Native, Next.js and Node.js — shipping mobile apps and web SaaS
            products end to end.
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <a href="#projects">
              <Button>View projects <Icon icon="lucide:arrow-down" width="16" /></Button>
            </a>
            <a href={`${import.meta.env.BASE_URL}resume/resume.pdf`} download="resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary"><Icon icon="lucide:file-text" width="16" /> Download CV</Button>
            </a>
          </div>
        </div>

        <div className="w-full">
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-xl border border-hairline bg-canvas-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline-strong text-body">
              <Icon icon="lucide:play" width="20" />
            </div>
            <div className="px-6 text-center">
              <p className="font-display text-sm font-semibold text-ink">Intro video coming soon</p>
              <p className="mt-1 text-xs text-mute">Currently in production — check back shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
