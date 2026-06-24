import Button from './UI/Button';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-[600px] sm:h-[600px] sm:w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(163,230,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black_40%,transparent_100%)]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-5 sm:gap-7">
          <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-pill border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] sm:text-xs text-primary font-medium hover:bg-primary/10 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for hire
          </a>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
            Building digital{' '}
            <span className="gradient-text">products</span>{' '}
            with precision.
          </h1>

          <p className="max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-body">
            I'm <span className="text-ink font-semibold">Sujan Chaudhary</span> — a React, React Native, Next.js & Node.js developer building mobile applications and web SaaS products from end to end.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-1">
            <a href="#projects">
              <Button>View Projects <Icon icon="lucide:arrow-down" width="16" /></Button>
            </a>
            <a href="https://portfolio-nextjs-zeta-one.vercel.app/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary"><Icon icon="lucide:file-text" width="16" /> Download CV</Button>
            </a>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden border border-hairline-strong green-glow flex flex-col items-center justify-center gap-4 bg-canvas-card relative">
            {/* animated glow pulse */}
            <div className="absolute inset-0 -z-10 bg-primary/5 animate-pulse" />
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <Icon icon="lucide:youtube" width="28" className="text-primary" />
            </div>
            <div className="text-center px-6">
              <p className="font-display text-base font-bold text-ink">Video Coming Soon</p>
              <p className="mt-1 text-xs text-body">My intro video is under construction — check back soon!</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-pill border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Under Construction
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
