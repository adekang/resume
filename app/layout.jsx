import './globals.css';

export const metadata = {
  title: '在线简历',
  description: '个人在线简历',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="bg-background-light text-gray-800 antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
