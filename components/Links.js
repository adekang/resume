import Section from './Section';

export default function Links() {
  return (
    <Section title="其他链接">
      <ul className="list-disc ml-5 space-y-2">
        <li>
          我的{' '}
          <a href="https://www.yuque.com/u12163881" className="text-teal-600">博客</a>
          ，记录了我整个学习的学习笔记和相关心得。
        </li>
        <li>
          我的{' '}
          <a href="https://github.com/adekang" className="text-teal-600">GitHub</a>
          ，累计有<strong>1500</strong>余次提交。
        </li>
      </ul>
    </Section>
  );
}
