import Section from './Section';

export default function Skills() {
  return (
    <Section title="个人技能">
      <ul className="list-disc ml-5 space-y-2">
        <li>有良好的计算机基础知识，熟悉基本数据结构与算法、了解网络通信原理。</li>
        <li>熟悉HTML、CSS，有原生 JavaScript 编程能力，熟悉 ES6+ 新特性，关注 ES 新动态，了解TypeScript的使用。</li>
        <li>熟练掌握 Vue3 全家桶，了解 Vue 源码，并有相关项目经验。了解 React 全家桶，会使用常用 Hooks API。</li>
        <li>熟悉使用 Element、Antd、NaiveUI、TailwindCSS 等常见 UI 组件库。</li>
        <li>熟悉前端工程化，具有打包优化的实际操作经验。</li>
        <li>熟悉 husky、commitlint、prettier 及 ESLint 代码规范和 Git 提交规范的配置，具备多人开发能力。</li>
        <li>对后端开发有一定的了解，会 Node.js、Nestjs 框架和 MySQL 数据库的使用，具备 RESTful API 开发经验。了解 Python 等后端开发语言，能够独立完成部分服务端功能模块的设计与开发。</li>
      </ul>
    </Section>
  );
}
