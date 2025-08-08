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
    <div className="min-h-screen bg-background-light">
      <div className="max-w-4xl mx-auto p-4 md:p-5">
        {/* 头部区域使用淡入动画 */}
        <div className="animate-fadeIn">
          <Header />
        </div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-5">
          {/* 左侧栏在移动端排在后面，桌面端在左侧 */}
          <aside className="order-2 lg:order-1 lg:col-span-1 space-y-5 animate-slideInLeft delay-100">
            <div className="animate-fadeIn delay-200">
              <BasicInfo />
            </div>
            <div className="animate-fadeIn delay-300">
              <Skills />
            </div>
          </aside>

          {/* 主内容区在移动端优先显示 */}
          <main id="main" className="order-1 lg:order-2 lg:col-span-2 space-y-5 animate-slideInRight delay-100">
            <div className="animate-fadeIn delay-200">
              <Projects />
            </div>
            <div className="animate-fadeIn delay-300">
              <OpenSource />
            </div>
            <div className="animate-fadeIn delay-400">
              <Internships />
            </div>
            <div className="animate-fadeIn delay-500">
              <Education />
            </div>
            <div className="animate-fadeIn delay-600">
              <Links />
            </div>
            <div className="animate-fadeIn delay-700">
              <Evaluation />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
