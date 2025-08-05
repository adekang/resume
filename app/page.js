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
    <div className="max-w-4xl mx-auto p-4">
      <Header />
      <div className="grid md:grid-cols-3 gap-8">
        <aside className="md:col-span-1">
          <BasicInfo />
          <Skills />
        </aside>
        <main className="md:col-span-2">
          <Projects />
          <OpenSource />
          <Internships />
          <Education />
          <Links />
          <Evaluation />
        </main>
      </div>
    </div>
  );
}
