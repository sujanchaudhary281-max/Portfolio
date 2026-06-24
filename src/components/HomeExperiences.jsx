import Timeline from './UI/Timeline';
import experiences from '../assets/experiences.json';

export default function HomeExperiences() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl text-center mb-12" style={{ letterSpacing: '-0.02em' }}>
          Experience
        </h2>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}
