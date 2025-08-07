export default function Header() {
  return (
    <header className="bg-slate-100 text-slate-800 p-8 rounded-lg mb-8 shadow-sm border border-slate-200 hover-glow transition-all duration-300">

      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-slideInLeft">康毅龙</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 animate-slideInLeft delay-200">
            <span className="inline-flex items-center bg-primary-light bg-opacity-20 px-3 py-1 rounded-md text-sm font-medium text-primary-dark hover-scale">
              前端开发工程师
            </span>
            <span className="inline-flex items-center bg-slate-200 bg-opacity-70 px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover-scale">
              随时到岗
            </span>
          </div>
          <p className="mt-3 text-slate-600 animate-fadeIn delay-300">
            专注现代前端技术，具有丰富的项目经验和团队协作能力
          </p>
        </div>
        <div className="ml-6 animate-zoomIn delay-100">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white p-1 shadow-md hover-lift transition-all duration-300">
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