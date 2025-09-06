import Section from './Section';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <Section title="创业经历" icon={faRocket}>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-lg font-semibold text-gray-800">AI国学占卜</h3>
          <a 
            href="https://guiguqimen.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary-light text-primary-dark px-2 py-1 rounded text-sm font-medium hover:bg-primary hover:text-white transition-colors"
          >
            鬼谷奇门
          </a>
        </div>
        <p className="text-gray-700 mb-4">
          洞察到传统文化与AI技术结合的巨大市场潜力，设计并全栈实现一个国学领域的AI智能体产品矩阵。该矩阵以产品鬼谷奇门为核心，提供专业解读服务，与【启明】和【定时辰】共同构成垂直领域内完整的产品生态。项目已成功上架主流应用商店，在少推广成本下，通过自然增长已累计覆盖用户超<strong className="text-gray-800">6000</strong>人，其中付费用户超2000人（<strong className="text-gray-800">付费转化率高达33%</strong>），目前已实现稳定盈利。
        </p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">技术架构：</h4>
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <span className="font-medium text-sm text-gray-700">前端:</span>
              <span className="text-sm text-gray-600"> uni-app | unocss | pinia | i18n | fetch-event-source | uview-plus</span>
            </div>
            <div>
              <span className="font-medium text-sm text-gray-700">后端:</span>
              <span className="text-sm text-gray-600"> nestjs | typeorm | ip-address | rxjs | redis | langchain | swc</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">技术亮点：</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1">•</span>
              <span><strong>跨端架构：</strong>基于uni-app实现iOS/Android/H5三端兼容开发，保持统一的业务逻辑实现跨平台兼容部署，覆盖90%以上移动终端用户</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1">•</span>
              <span>使用HTML2Canvas实现动态海报生成促进社交传播，基于driver.js创建引导式用户引导流程，降低用户上手门槛</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1">•</span>
              <span>使用fetch-event-source库对接后端SSE接口，实现聊天消息的实时流式输出。针对不同平台的兼容性问题，封装统一的流式数据处理工具，支持<strong className="text-gray-800">断线重连</strong>和<strong className="text-gray-800">错误恢复机制</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1">•</span>
              <span>使用 NestJS 框架构建一个模块化、可扩展的后端系统，实现完整的模块化设计，全局异常处理机制，统一的响应格式，集成日志系统</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1">•</span>
              <span>通过 LangChain 框架集成多种 AI 大模型（如 Qwen、Gemini 等），实现<strong className="text-gray-800">模型的动态切换</strong>和配置管理，<strong className="text-gray-800">支持流式响应</strong>，提升用户体验，设计灵活的<strong className="text-gray-800">提示词工程系统</strong>，支持<strong className="text-gray-800">多种对话模式和场景</strong>。设计<strong className="text-gray-800">安全管控提示词方案</strong>，防止用户爆破提示词</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1">•</span>
              <span>复杂会话管理，实现完整的会话历史记录管理，支持多轮对话<strong className="text-gray-800">上下文维护</strong>，设计<strong className="text-gray-800">模板系统</strong>，可根据不同场景定制对话流程</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1">•</span>
              <span>通过 Docker 容器化封装与 docker-compose 配置，实现应用的自动化部署（CI/CD）及快速迭代</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}