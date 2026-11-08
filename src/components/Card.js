import Link from "next/link";

/**
 * Tarjeta reutilizable.
 * - Con `href`: toda la tarjeta es un enlace (ideal para accesos a secciones).
 * - Sin `href`: tarjeta informativa.
 */
export default function Card({ titulo, children, href, icono, className = "" }) {
  const contenido = (
    <>
      {icono && <div className="mb-3 text-3xl" aria-hidden="true">{icono}</div>}
      <h3 className="text-lg font-semibold text-brand-900">{titulo}</h3>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{children}</div>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:gap-2 transition-all">
          Ver más <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  const base = `group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${base} transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-md`}>
        {contenido}
      </Link>
    );
  }
  return <div className={base}>{contenido}</div>;
}
