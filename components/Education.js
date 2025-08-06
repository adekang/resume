import Section from './Section';
import { faGraduationCap, faSchool, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

export default function Education() {
  return (
    <Section title="教育经历" icon={faGraduationCap}>
      <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-400">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-500 rounded-lg flex items-center justify-center text-white text-xl">
            <Icon icon={faSchool} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              西南科技大学
              <span className="bg-slate-500 text-white px-2 py-1 rounded text-sm font-medium">
                在读
              </span>
            </h3>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-lg font-medium text-gray-700 flex items-center gap-2">
                <Icon icon={faGraduationCap} /> 计算机技术（硕士）
              </span>
              <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
                <Icon icon={faCalendar} className="w-3 h-3" /> 2023.09 ~ 2026.06
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
