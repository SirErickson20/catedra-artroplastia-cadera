/** Encabezado de cada sección: fondo oscuro con brillo violeta desde arriba */
export default function PageHeader({ titulo, descripcion }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(130,38,209,0.35),transparent_70%)]" />
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">{titulo}</h1>
        {descripcion && <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">{descripcion}</p>}
      </div>
    </section>
  );
}
