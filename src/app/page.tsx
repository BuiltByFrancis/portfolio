import { About } from '@/components/home/about';
import { Experience } from '@/components/home/experience';
import { Projects } from '@/components/home/projects';
import { Sidebar } from '@/components/home/sidebar';

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center lg:flex-row">
      <div className="flex w-full max-w-[1280px] flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1 px-10 pb-20">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}
