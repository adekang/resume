import Section from './Section';
import { faStar, faRocket, faHandshake, faBook, faBullseye } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

export default function Evaluation() {
  return (
    <Section title="个人评价" icon={faStar}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-slate-500 text-lg">
              <Icon icon={faRocket} className="w-4 h-4" />
            </span>
            <h4 className="font-semibold text-gray-800">个人品质</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              乐观向上、善于沟通，善于学习
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              逻辑能力强，思路清晰，具有良好的编码习惯
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              适应能力强，能够承受一定的压力
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-slate-500 text-lg">
              <Icon icon={faHandshake} className="w-4 h-4" />
            </span>
            <h4 className="font-semibold text-gray-800">团队合作</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              具有良好的团队合作能力
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              具有较强的组织能力和协作精神
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              热爱工作，认同公司发展与个人成长的统一
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-slate-500 text-lg">
              <Icon icon={faBook} className="w-4 h-4" />
            </span>
            <h4 className="font-semibold text-gray-800">技术热情</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              热爱前端技术，持续学习并更新知识
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              具有实际动手能力和项目经验
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-slate-500 text-lg">
              <Icon icon={faBullseye} className="w-4 h-4" />
            </span>
            <h4 className="font-semibold text-gray-800">工作态度</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              追求科学的工作流程和高效管理
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              为产品的极致体验锲而不舍
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
