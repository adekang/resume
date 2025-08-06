# Cloudflare Pages 部署指南

本指南将帮助您将 Next.js 简历项目部署到 Cloudflare Pages。

## 📋 前提条件

- Cloudflare 账户
- GitHub 账户
- 已安装 Node.js 和 pnpm@9.15.2

```bash
# 安装 pnpm (如果尚未安装)
npm install -g pnpm@9.15.2

# 验证版本
pnpm --version
```

## 🚀 部署步骤

### 1. 获取 Cloudflare API 凭据

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 前往 **我的个人资料** > **API 令牌**
3. 创建一个**自定义令牌**，权限设置为：
   - `Cloudflare Pages:Edit`
   - `Account:Read`
4. 复制生成的 API Token
5. 在同一页面找到您的 **Account ID**

### 2. 配置 GitHub Secrets

在您的 GitHub 仓库中：

1. 前往 **Settings** > **Secrets and variables** > **Actions**
2. 添加以下 secrets：
   - `CLOUDFLARE_API_TOKEN`: 步骤 1 中获取的 API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 步骤 1 中获取的 Account ID

### 3. 创建 Cloudflare Pages 项目

#### 方法一：通过 Cloudflare Dashboard（推荐）

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 前往 **Pages** > **创建项目**
3. 选择 **连接到 Git**
4. 选择您的 GitHub 仓库
5. 配置构建设置：
   - **项目名称**: `resume`（或您喜欢的名称）
   - **生产分支**: `master`
   - **构建命令**: `pnpm run build`
   - **构建输出目录**: `out`
   - **Root directory**: `/`（保持空白）

#### 方法二：通过命令行

```bash
# 安装 Wrangler CLI（如果尚未安装）
pnpm add -g wrangler

# 登录 Cloudflare
wrangler login

# 创建 Pages 项目
wrangler pages project create resume
```

### 4. 本地开发和测试

```bash
# 安装依赖
pnpm install

# 本地开发
pnpm dev

# 构建项目
pnpm build

# 本地预览 Cloudflare Pages 构建
pnpm preview

# 手动部署到 Cloudflare Pages
pnpm cf:deploy
```

## 📁 项目结构

```
├── .github/workflows/
│   ├── cloudflare-pages.yml    # Cloudflare Pages 自动部署
│   └── static.yml              # GitHub Pages 部署（可选）
├── out/                        # 构建输出目录
├── next.config.js              # Next.js 配置
├── wrangler.toml              # Cloudflare 配置
└── package.json               # 项目依赖和脚本
```

## 🔧 可用的 pnpm 脚本

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建生产版本
- `pnpm pages:build` - 使用 Cloudflare 适配器构建
- `pnpm preview` - 本地预览 Cloudflare Pages 构建
- `pnpm deploy` - 构建并部署到 Cloudflare Pages
- `pnpm cf:deploy` - 直接部署现有构建到 Cloudflare Pages

## 🌍 自动部署

每当您推送代码到 `master` 分支时，GitHub Actions 会自动：

1. 构建 Next.js 应用
2. 部署到 Cloudflare Pages
3. 您的网站将在几分钟内更新

## 🔗 访问您的网站

部署完成后，您的网站将在以下地址可用：
- `https://resume.pages.dev`（默认域名）
- 您也可以在 Cloudflare Pages 控制台中配置自定义域名

## 🛠️ 故障排除

### 构建失败
- 检查 GitHub Actions 日志
- 确保所有依赖都已正确安装
- 验证 `out` 目录是否正确生成

### 部署失败
- 验证 Cloudflare API Token 和 Account ID 是否正确
- 检查 Cloudflare Pages 项目名称是否匹配
- 确保您有足够的 Cloudflare Pages 配额

### 样式问题
- 如果遇到 CSS 样式问题，请检查 `next.config.js` 中的 `assetPrefix` 配置
- Cloudflare Pages 通常不需要相对路径前缀

## 📝 环境变量

如果您的应用需要环境变量：

1. 在 Cloudflare Pages 控制台中设置环境变量
2. 或在 `wrangler.toml` 中配置 `[env.production.vars]`

## 🔄 更新项目

要更新项目名称或其他设置：

1. 更新 `wrangler.toml` 中的 `name` 字段
2. 更新 `.github/workflows/cloudflare-pages.yml` 中的 `projectName`
3. 在 Cloudflare Pages 控制台中更新项目设置

---

## 🎉 完成！

您的 Next.js 简历网站现在应该已经成功部署到 Cloudflare Pages！

如有任何问题，请查看 [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/) 或 [Next.js 文档](https://nextjs.org/docs)。