import Section from './Section';
import { faBuilding, faCalendar, faChartBar, faLock, faMobile, faSync, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

export default function Internships() {
  return (
    <Section title="实习经历" icon={faBuilding}>
      <div className="space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-400">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center text-white text-lg">
              <Icon icon={faBuilding} className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">中国工程物理研究院</h3>
              <span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded flex items-center gap-1">
                <Icon icon={faCalendar} className="w-3 h-3" /> 2023.09 ~ 2024.08
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">
                  <Icon icon={faChartBar} className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">配方数据管理平台 - 前端开发</h4>
                  <p className="text-gray-700 mb-3">项目介绍：为中国工程物理研究院（中物院）开发的军用配方数据管理平台，面向军用配方的管理、性能预测与模型评估，系统具备公式编辑能力与类工作流流程控制，项目周期 3 个月，交付 30+ 页面并稳定上线。</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>技术栈：</strong>Vue3 | Vite | Less | Axios | Pinia | Element-plus | Katex</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 从<strong> 0 -1 负责整个前端平台的开发工作</strong>，开发周期 3 个月，设计业务页面 30 余个，各里程碑确认无延期</li>
                    <li>• 项目中涉及大量化工/物理公式输入与动态展示，采用 Katex 实现<strong>公式解析</strong>，满足科研级公式精度与样式要求</li>
                    <li>• 性能预测模块以流程驱动为核心，前端需处理复杂且状态多变的业务表单，通过实现分步校验、流程状态管控及前端缓存机制，提升表单交互的连贯性与数据填报的稳定性</li>
                    <li>• 通过封装 Hooks、组件 的方式，针对大量复杂表单进行统一处理，沉淀 5 个 Hooks 和 3 个表单处理组件</li>
                    <li>• 其他的功能优化，比如：功能引导、模糊搜索、表格拖拽、主题变更 等</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">
                  <Icon icon={faLock} className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">涉密信息安全平台 - 前端开发</h4>
                  <p className="text-sm text-gray-600 mb-2"><strong>技术栈：</strong>Vue3 | Vite | Pinia | TailwindCSS | Echarts</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 基于之前沉淀的基础功能化方案、功能组件，完成快速的项目搭建与开发，超预期 30% 完成项目交付</li>
                    <li>• 基于 ECharts 封装支持多参数联动更新的通用图表组件。通过<strong>优化大JSON</strong>的渲染策略，有效解决性能瓶颈，显著提升图表的加载速度与交互流畅度。</li>
                    <li>• 为解决大数据可视化带来的性能挑战，主导实施多项优化策略，包括组件懒注册、图表异步加载与图片懒加载，降低首屏加载时间和内存占用。</li>
                    <li>• 基于 XLSX 完成 Excel 数据的导入、导出逻辑，其中解析算法均为团队自主实现</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-400">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center text-white text-lg">
              <Icon icon={faBuilding} className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">成都超有爱科技有限公司</h3>
              <span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded flex items-center gap-1">
                <Icon icon={faCalendar} className="w-3 h-3" /> 2021.09 ~ 2021.12
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-slate-500 mt-1">
                <Icon icon={faMobile} className="w-4 h-4" />
              </span>
              <span>参与开发柚子鸭 C 端小程序项目（基于 Taro + React）及 B 端后台管理系统（基于 UmiJS + Ant Design），负责功能模块实现与组件封装</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-500 mt-1">
                <Icon icon={faSync} className="w-4 h-4" />
              </span>
              <span>独立开发下拉刷新组件，适配移动端 H5 页面，实现数据刷新与回弹动画，提升用户交互体验</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-500 mt-1">
                <Icon icon={faHandshake} className="w-4 h-4" />
              </span>
              <span>熟悉并融入企业级多人协作流程，包括分支管理、任务拆分，协同推进产品快速上线</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
