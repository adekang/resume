import Section from './Section';

export default function Internships() {
  return (
    <Section title="实习经历">
      <div className="mb-4">
        <h3 className="font-semibold">中国工程物理研究院 <span className="text-gray-600 text-sm">2023.09~2024.08</span></h3>
        <ul className="list-disc ml-5 space-y-2">
          <li>配方数据管理平台：从 0 到 1 负责前端开发，3 个月交付 30+ 页面并上线；使用 MathJS + KaTeX 支持复杂公式解析与渲染；设计模块化 Axios 请求体系，支持 Token 注入与刷新、统一异常处理；封装 Hooks 和表单组件，优化性能预测模块流程与表单交互；实现功能引导、模糊搜索、表格拖拽、主题变更等优化。</li>
          <li>涉密信息安全平台：复用请求体系与通用组件，高效搭建表单、权限等模块，缩短开发周期约 30%；封装基于 ECharts 的通用图表组件，优化大体积 JSON 渲染；实现 Excel 导入导出并通过异步拆分与延迟渲染提升稳定性；通过图片、组件懒加载等策略优化首屏性能与内存占用；负责打包优化等功能。</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">成都超有爱科技有限公司 <span className="text-gray-600 text-sm">2021.09~2021.12</span></h3>
        <ul className="list-disc ml-5 space-y-2">
          <li>参与开发柚子鸭 C 端小程序（Taro + React）及 B 端后台管理系统（UmiJS + Ant Design）。</li>
          <li>独立开发下拉刷新组件，适配移动端 H5 页面，提升交互体验。</li>
          <li>熟悉企业级多人协作流程，包括分支管理、任务拆分。</li>
        </ul>
      </div>
    </Section>
  );
}
