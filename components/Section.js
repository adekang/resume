export default function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold border-b-2 border-teal-500 mb-4">{title}</h2>
      {children}
    </section>
  );
}
