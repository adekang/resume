import Header from '../components/Header';
import BasicInfo from '../components/BasicInfo';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import Internships from '../components/Internships';
import Education from '../components/Education';
import Links from '../components/Links';
import Evaluation from '../components/Evaluation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <Header />
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <BasicInfo />
            <Skills />
          </aside>
          <main className="lg:col-span-2 space-y-6">
            <Projects />
            <OpenSource />
            <Internships />
            <Education />
            <Links />
            <Evaluation />
          </main>
        </div>
      </div>
    </div>
  );
}
