import Section from './Section';

export default function BasicInfo() {
  return (
    <Section title="基本信息">
      <ul className="space-y-2">
        <li>性别：男</li>
        <li>
          电话：
          <a className="text-teal-600" href="tel:18398203270">
            18398203270（微信同号）
          </a>
        </li>
        <li>
          邮箱：
          <a className="text-teal-600" href="mailto:adekang@163.com">
            adekang@163.com
          </a>
        </li>
        <li>
          GitHub：
          <a className="text-teal-600" href="https://github.com/adekang">
            https://github.com/adekang
          </a>
        </li>
      </ul>
    </Section>
  );
}
