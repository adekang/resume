import Section from './Section';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function OpenSource() {
  return (
    <Section title="开源项目" icon={faStar}>
      <div className="border-l-4 border-slate-400 pl-6">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-lg font-semibold text-gray-800">中后台项目模板框架</h3>
          <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">
            开源项目
          </span>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span>基于中物院项目经验沉淀的中后台前端模板框架，支持快速搭建业务系统，已在成果管平台、材料数据库平台等项目中落地。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span><strong>技术栈：</strong>Vue3、Vite、AntdV、Pinia、unocss、i18n、monorepo。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span>提供动态路由与权限管理，支持多种控制方式。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span>基于 Design Token 和 css-var 实现主题色和明暗模式切换。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span>引入 ESLint、Husky、GitLab CLI 等工具，制定开发与发布规范。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span>实现模块级国际化配置，并进行打包、图片与组件懒加载等优化。</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}