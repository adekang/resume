import Section from './Section';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function BasicInfo() {
  return (
    <Section title="基本信息" icon={faUser}>
      <ul className="space-y-2">
        <li className="flex items-start gap-3 py-2">
          <span className="text-gray-500 mt-0.5">•</span>
          <span><strong>性别：</strong>男</span>
        </li>
        <li className="flex items-start gap-3 py-2">
          <span className="text-gray-500 mt-0.5">•</span>
          <div>
            <strong>电话：</strong>
            <a className="text-slate-600 hover:text-slate-700" href="tel:18398203270">
              18398203270（微信同号）
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3 py-2">
          <span className="text-gray-500 mt-0.5">•</span>
          <div>
            <strong>邮箱：</strong>
            <a className="text-slate-600 hover:text-slate-700" href="mailto:adekang@163.com">
              adekang@163.com
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3 py-2">
          <span className="text-gray-500 mt-0.5">•</span>
          <div>
            <strong>GitHub：</strong>
            <a className="text-slate-600 hover:text-slate-700" href="https://github.com/adekang" target="_blank" rel="noopener noreferrer">
              github.com/adekang
            </a>
          </div>
        </li>
      </ul>
    </Section>
  );
}
