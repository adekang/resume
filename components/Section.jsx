import Icon from './Icon';

export default function Section({ title, children, icon }) {
  return (
    <section className="bg-white rounded-xl p-5 mb-5 shadow-sm hover:shadow transition-all duration-300">
      <div className="flex items-center mb-3">
        {icon && (
          <div className="w-7 h-7 bg-primary bg-opacity-90 rounded-md flex items-center justify-center mr-3 text-white text-sm transition-transform duration-300">
            <Icon icon={icon} className="w-3.5 h-3.5" />
          </div>
        )}
        <h2 className="text-lg font-medium text-primary-dark flex-1">{title}</h2>
        <div className="w-6 h-0.5 bg-primary-light opacity-70 rounded-full"></div>
      </div>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}