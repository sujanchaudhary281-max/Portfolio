import Hero from '../components/Hero';
import TechArsenal from '../components/TechArsenal';
import FeaturedProjects from '../components/FeaturedProjects';
import HomeExperiences from '../components/HomeExperiences';
import HomeContact from '../components/HomeContact';
import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn><TechArsenal /></FadeIn>
      <FadeIn><FeaturedProjects /></FadeIn>
      <FadeIn><HomeExperiences /></FadeIn>
      <FadeIn><HomeContact /></FadeIn>
    </>
  );
}
