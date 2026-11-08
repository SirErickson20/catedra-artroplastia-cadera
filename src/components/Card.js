import Link from "next/link";

/**
 * Tarjeta reutilizable (tema oscuro).
 * - Con `href`: toda la tarjeta es un enlace.
 * - Sin `href`: tarjeta informativa.
 */
export default function Card({ titulo, children, href, icono, className = "" }) {
  const contenido = (
    <>
      {icono && <div className="mb-3 text-3xl" aria-hidden="true">{icono}</div>}
      <h3 className="text-lg font-semibold text-white">{titulo}</h3>
      <div className="mt-2 text-sm leading-relaxed text-white/60">{children}</div>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-100 transition-all group-hover:gap-2">
          Ver más <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  const base = `group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${base} transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.05]`}>
        {contenido}
      </Link>
    );
  }
  return <div className={base}>{contenido}</div>;
}
