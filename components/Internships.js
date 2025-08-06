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
                  <h4 className="font-semibold text-gray-800 mb-2">配方数据管理平台</h4>
                  <p className="text-gray-700">从 0 到 1 负责前端开发，3 个月交付 30+ 页面并上线；使用 MathJS + KaTeX 支持复杂公式解析与渲染；设计模块化 Axios 请求体系，支持 Token 注入与刷新、统一异常处理；封装 Hooks 和表单组件，优化性能预测模块流程与表单交互；实现功能引导、模糊搜索、表格拖拽、主题变更等优化。</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">
                  <Icon icon={faLock} className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">涉密信息安全平台</h4>
                  <p className="text-gray-700">复用请求体系与通用组件，高效搭建表单、权限等模块，缩短开发周期约 30%；封装基于 ECharts 的通用图表组件，优化大体积 JSON 渲染；实现 Excel 导入导出并通过异步拆分与延迟渲染提升稳定性；通过图片、组件懒加载等策略优化首屏性能与内存占用；负责打包优化等功能。</p>
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
              <span>参与开发柚子鸭 C 端小程序（Taro + React）及 B 端后台管理系统（UmiJS + Ant Design）。</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-500 mt-1">
                <Icon icon={faSync} className="w-4 h-4" />
              </span>
              <span>独立开发下拉刷新组件，适配移动端 H5 页面，提升交互体验。</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-500 mt-1">
                <Icon icon={faHandshake} className="w-4 h-4" />
              </span>
              <span>熟悉企业级多人协作流程，包括分支管理、任务拆分。</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
