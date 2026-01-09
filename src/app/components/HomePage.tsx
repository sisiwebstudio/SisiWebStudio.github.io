import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';

interface HomePageProps {
  onProjectClick: (projectId: number) => void;
}

export function HomePage({ onProjectClick }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Projects onProjectClick={onProjectClick} />
      <Contact />
    </div>
  );
}
