/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // 明亮的蓝色
          DEFAULT: '#3b82f6', // 主蓝色
          dark: '#2563eb',
        },
        secondary: {
          light: '#a5b4fc',
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        highlight: '#f59e0b', // 高亮色（橙色）
        background: {
          light: '#f8fafc', // 更亮的背景色
          DEFAULT: '#f1f5f9',
        }
      },
    },
  },
  plugins: [],
}
