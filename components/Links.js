import Section from './Section';
import { faLink, faBook, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

export default function Links() {
  return (
    <Section title="其他链接" icon={faLink}>
      <div className="space-y-4">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center text-white text-lg">
              <Icon icon={faBook} className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">我的</span>
                <a
                  href="https://www.yuque.com/u12163881"
                  className="text-slate-600 hover:text-slate-700 font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  博客
                </a>
              </div>
              <p className="text-sm text-slate-600 mt-1">记录了我整个学习的学习笔记和相关心得</p>
            </div>
            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
              学习笔记
            </span>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center text-white text-lg">
              <Icon icon={faCodeBranch} className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">我的</span>
                <a
                  href="https://github.com/adekang"
                  className="text-slate-600 hover:text-slate-700 font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <p className="text-sm text-slate-600 mt-1">累计有 <strong className="text-slate-600">1500+</strong> 次提交</p>
            </div>
            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
              开源项目
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
