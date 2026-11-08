export default function PageHeader({ titulo, descripcion }) {
  return (
    <section className="bg-linear-to-br from-brand-700 to-brand-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">{titulo}</h1>
        {descripcion && <p className="mt-3 max-w-2xl text-brand-100">{descripcion}</p>}
      </div>
    </section>
  );
}
