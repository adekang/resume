import Section from './Section';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <Section title="项目经历" icon={faRocket}>
      <div className="border-l-4 border-slate-400 pl-6">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-lg font-semibold text-gray-800">大模型应用开发</h3>
          <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">
            热门项目
          </span>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span>构建基于前后端分离架构的 AI 对话系统，后端集成多种大模型，实现多轮对话、流式响应与个性化分析，目前覆盖 <strong className="text-gray-800">6000+ 用户</strong>，其中付费用户 <strong className="text-gray-800">2000+</strong>。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span><strong>技术栈：</strong>uniapp、unocss、pinia、i18n、fetch-event-source、uview-plus；nestjs、typeorm、redis、langchain 等。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span><strong>跨端架构：</strong>基于 UniApp 实现 iOS/Android/H5 三端兼容开发，统一业务逻辑并覆盖 90% 移动终端。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span>使用 fetch-event-source 对接后端 SSE 接口，封装流式数据处理工具，支持断线重连和错误恢复。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span>通过 LangChain 集成多种 AI 大模型，实现模型动态切换和配置管理，设计提示词工程系统与安全管控策略。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <span>提供 Docker 和 docker-compose 部署，支持多环境配置与容器化部署。</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}