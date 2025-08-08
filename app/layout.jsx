import './globals.css';

export const metadata = {
  title: '在线简历 - 康毅龙',
  description: '前端开发工程师 | 项目与开源经历',
  metadataBase: typeof window === 'undefined' ? new URL('https://example.com') : undefined,
  openGraph: {
    title: '康毅龙 - 在线简历',
    type: 'profile',
    locale: 'zh_CN',
  },
  twitter: { card: 'summary', title: '康毅龙 - 在线简历' },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="bg-background-light text-gray-800 antialiased" suppressHydrationWarning={true}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-primary-dark focus:px-3 focus:py-2 focus:rounded-md">跳转到主内容</a>
        {children}
        <footer className="text-center text-xs text-slate-500 py-6">
          最后更新：{/* 可替换为构建时间 */}2025-01-01
        </footer>
      </body>
    </html>
  );
}
