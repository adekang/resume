import Section from './Section';
import { faBuilding, faCalendar, faChartBar, faLock, faMobile, faSync, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

export default function Internships() {
  return (
    <Section title="实习经历" icon={faBuilding}>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-semibold text-gray-800">前端开发 - 中国工程物理研究院</h3>
            <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">
              2023.09 - 2024.08
            </span>
          </div>
          <p className="text-gray-700 mb-4">
            为中国工程物理研究院（中物院）开发的军用配方数据管理平台，面向军用配方的管理、性能预测与模型评估，系统具备公式编辑能力与类工作流流程控制，项目周期 3 个月，交付 30+ 页面并稳定上线。同时参与涉密信息安全平台开发，基于之前沉淀的基础功能化方案、功能组件，超预期 30% 完成项目交付。
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">配方数据管理平台：</h4>
            <p className="text-sm text-gray-600 mb-2"><strong>技术栈：</strong>Vue3 | Vite | Less | Axios | Pinia | Element-plus | Katex</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>从<strong> 0 -1 负责整个前端平台的开发工作</strong>，开发周期 3 个月，设计业务页面 30 余个，各里程碑确认无延期</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>项目中涉及大量化工/物理公式输入与动态展示，采用 Katex 实现<strong>公式解析</strong>，满足科研级公式精度与样式要求</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>性能预测模块以流程驱动为核心，前端需处理复杂且状态多变的业务表单，通过实现分步校验、流程状态管控及前端缓存机制，提升表单交互的连贯性与数据填报的稳定性</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>通过封装 Hooks、组件 的方式，针对大量复杂表单进行统一处理，沉淀 5 个 Hooks 和 3 个表单处理组件</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">涉密信息安全平台：</h4>
            <p className="text-sm text-gray-600 mb-2"><strong>技术栈：</strong>Vue3 | Vite | Pinia | TailwindCSS | Echarts</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>基于 ECharts 封装支持多参数联动更新的通用图表组件。通过<strong>优化大JSON</strong>的渲染策略，有效解决性能瓶颈，显著提升图表的加载速度与交互流畅度</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>为解决大数据可视化带来的性能挑战，主导实施多项优化策略，包括组件懒注册、图表异步加载与图片懒加载，降低首屏加载时间和内存占用</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>基于 XLSX 完成 Excel 数据的导入、导出逻辑，其中解析算法均为团队自主实现</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span>其他功能优化：功能引导、模糊搜索、表格拖拽、主题变更等</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-semibold text-gray-800">前端开发 - 成都超有爱科技有限公司</h3>
            <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">
              2021.09 - 2021.12
            </span>
          </div>
          <p className="text-gray-700 mb-4">
            参与开发柚子鸭 C 端小程序项目（基于 Taro + React）及 B 端后台管理系统（基于 UmiJS + Ant Design），负责功能模块实现与组件封装。熟悉并融入企业级多人协作流程，包括分支管理、任务拆分，协同推进产品快速上线。
          </p>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">主要工作：</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span><strong>小程序开发：</strong>参与柚子鸭 C 端小程序项目开发，基于 Taro + React 技术栈实现跨端开发</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span><strong>后台管理系统：</strong>参与 B 端后台管理系统开发，基于 UmiJS + Ant Design 构建管理界面</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span><strong>组件开发：</strong>独立开发下拉刷新组件，适配移动端 H5 页面，实现数据刷新与回弹动画，提升用户交互体验</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">•</span>
                <span><strong>团队协作：</strong>熟悉企业级多人协作流程，掌握 Git 分支管理、任务拆分等开发规范</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
