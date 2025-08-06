import Icon from './Icon';

export default function Section({ title, children, icon }) {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
      <div className="flex items-center mb-4">
        {icon && (
          <div className="w-8 h-8 bg-slate-500 rounded-md flex items-center justify-center mr-3 text-white text-sm">
            <Icon icon={icon} />
          </div>
        )}
        <h2 className="text-xl font-semibold text-gray-800 flex-1">{title}</h2>
        <div className="w-8 h-0.5 bg-slate-400 rounded-full"></div>
      </div>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
