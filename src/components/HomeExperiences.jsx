import Timeline from './UI/Timeline';
import experiences from '../assets/experiences.json';

export default function HomeExperiences() {
  return (
    <section className="border-b border-hairline py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-primary">Career</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Experience
          </h2>
        </div>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}
