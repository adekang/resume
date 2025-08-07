import Section from './Section';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

// 创建一个高亮技术的组件
const HighlightTech = ({ children }) => (
  <span className="text-highlight font-medium relative inline-block transition-colors duration-300">
    {children}
    <span className="absolute bottom-0 left-0 w-full h-px bg-highlight opacity-40"></span>
  </span>
);

export default function Skills() {
  return (
    <Section title="个人技能" icon={faBolt}>
      <ul className="space-y-2 text-sm">
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5 text-xs">•</span>
          <span>有良好的计算机基础知识，熟悉基本<HighlightTech>数据结构与算法</HighlightTech>、了解<HighlightTech>网络通信原理</HighlightTech>。</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5 text-xs">•</span>
          <span>熟悉<HighlightTech>HTML</HighlightTech>、<HighlightTech>CSS</HighlightTech>，有原生 <HighlightTech>JavaScript</HighlightTech> 编程能力，熟悉 <HighlightTech>ES6+</HighlightTech> 新特性，关注 ES 新动态，了解<HighlightTech>TypeScript</HighlightTech>的使用。</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5 text-xs">•</span>
          <span>熟练掌握 <HighlightTech>Vue3</HighlightTech> 全家桶，了解 Vue 源码，并有相关项目经验。了解 <HighlightTech>React</HighlightTech> 全家桶，会使用常用 Hooks API。</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5 text-xs">•</span>
          <span>熟悉使用 Element、Antd、NaiveUI、<HighlightTech>TailwindCSS</HighlightTech> 等常见 UI 组件库。</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5 text-xs">•</span>
          <span>熟悉<HighlightTech>前端工程化</HighlightTech>，具有打包优化的实际操作经验。</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5 text-xs">•</span>
          <span>熟悉 husky、commitlint、prettier 及 ESLint 代码规范和 <HighlightTech>Git</HighlightTech> 提交规范的配置，具备多人开发能力。</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-0.5 text-xs">•</span>
          <span>对后端开发有一定的了解，会 <HighlightTech>Node.js</HighlightTech>、<HighlightTech>Nestjs</HighlightTech> 框架和 <HighlightTech>MySQL</HighlightTech> 数据库的使用，具备 RESTful API 开发经验。了解 <HighlightTech>Python</HighlightTech> 等后端开发语言，能够独立完成部分服务端功能模块的设计与开发。</span>
        </li>
      </ul>
    </Section>
  );
}