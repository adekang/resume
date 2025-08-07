export default function Header() {
  return (
    <header className="bg-white text-slate-800 p-6 rounded-xl mb-5 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 animate-slideInLeft text-primary-dark">康毅龙</h1>
          <div className="flex flex-wrap items-center gap-2 animate-slideInLeft delay-200">
            <span className="inline-flex items-center bg-primary-light bg-opacity-10 px-2.5 py-0.5 rounded-md text-sm font-medium text-primary-dark">
              前端开发工程师
            </span>
            <span className="inline-flex items-center bg-slate-100 px-2.5 py-0.5 rounded-md text-sm text-slate-600">
              随时到岗
            </span>
          </div>
          <p className="mt-2 text-slate-600 text-sm animate-fadeIn delay-300">
            专注现代前端技术，具有丰富的项目经验和团队协作能力
          </p>
        </div>
        <div className="ml-4 animate-zoomIn delay-100">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white p-0.5 shadow-sm hover:shadow transition-all duration-300">
            <img
              src="https://i.loli.net/2021/10/29/AEQDrgG7S4vhOtJ.jpg"
              alt="康毅龙的头像"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}