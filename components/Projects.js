import Section from './Section';

export default function Projects() {
  return (
    <Section title="项目经历">
      <div className="mb-4">
        <h3 className="font-semibold">大模型应用开发</h3>
        <ul className="list-disc ml-5 space-y-2">
          <li>构建基于前后端分离架构的 AI 对话系统，后端集成多种大模型，实现多轮对话、流式响应与个性化分析，目前覆盖 6000+ 用户，其中付费用户 2000+。</li>
          <li>技术栈：uniapp、unocss、pinia、i18n、fetch-event-source、uview-plus；nestjs、typeorm、redis、langchain 等。</li>
          <li>跨端架构：基于 UniApp 实现 iOS/Android/H5 三端兼容开发，统一业务逻辑并覆盖 90% 移动终端。</li>
          <li>使用 fetch-event-source 对接后端 SSE 接口，封装流式数据处理工具，支持断线重连和错误恢复。</li>
          <li>通过 LangChain 集成多种 AI 大模型，实现模型动态切换和配置管理，设计提示词工程系统与安全管控策略。</li>
          <li>提供 Docker 和 docker-compose 部署，支持多环境配置与容器化部署。</li>
        </ul>
      </div>
    </Section>
  );
}
