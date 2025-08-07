import Section from './Section';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function BasicInfo() {
  return (
    <Section title="基本信息" icon={faUser}>
      <ul className="space-y-1.5">
        <li className="flex items-center gap-2 py-1.5">
          <span className="text-primary text-xs">•</span>
          <div>
            <span className="font-medium text-sm text-gray-700 mr-1">电话：</span>
            <a className="text-primary-dark hover:text-primary transition-colors text-sm underline decoration-1 underline-offset-2" href="tel:18398203270">
              18398203270（微信同号）
            </a>
          </div>
        </li>
        <li className="flex items-center gap-2 py-1.5">
          <span className="text-primary text-xs">•</span>
          <div>
            <span className="font-medium text-sm text-gray-700 mr-1">邮箱：</span>
            <a className="text-primary-dark hover:text-primary transition-colors text-sm underline decoration-1 underline-offset-2" href="mailto:adekang@163.com">
              adekang@163.com
            </a>
          </div>
        </li>
        <li className="flex items-center gap-2 py-1.5">
          <span className="text-primary text-xs">•</span>
          <div>
            <span className="font-medium text-sm text-gray-700 mr-1">GitHub：</span>
            <a className="text-primary-dark hover:text-primary transition-colors text-sm underline decoration-1 underline-offset-2" href="https://github.com/adekang" target="_blank" rel="noopener noreferrer">
              github.com/adekang
            </a>
          </div>
        </li>
      </ul>
    </Section>
  );
}