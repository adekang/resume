import Section from './Section';

export default function OpenSource() {
  return (
    <Section title="开源项目">
      <div>
        <h3 className="font-semibold">中后台项目模板框架</h3>
        <ul className="list-disc ml-5 space-y-2">
          <li>基于中物院项目经验沉淀的中后台前端模板框架，支持快速搭建业务系统，已在成果管平台、材料数据库平台等项目中落地。</li>
          <li>技术栈：Vue3、Vite、AntdV、Pinia、unocss、i18n、monorepo。</li>
          <li>提供动态路由与权限管理，支持多种控制方式。</li>
          <li>基于 Design Token 和 css-var 实现主题色和明暗模式切换。</li>
          <li>引入 ESLint、Husky、GitLab CLI 等工具，制定开发与发布规范。</li>
          <li>实现模块级国际化配置，并进行打包、图片与组件懒加载等优化。</li>
        </ul>
      </div>
    </Section>
  );
}
