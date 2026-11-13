import PageHeader from "@/components/PageHeader";
import { fisioterapia } from "@/data/content";

export const metadata = { title: "Fisioterapia aplicada" };

export default function FisioterapiaPage() {
  const { titulo, descripcion, agentes } = fisioterapia;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {agentes.map((a) => (
            <article
              key={a.nombre}
              className="relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_55%_at_50%_0%,rgba(67,56,202,0.4),transparent_70%)]" />
              <div className="relative flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-linear-to-b from-white/15 to-black/30 text-2xl">
                  {a.icono}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-white">{a.nombre}</h2>
                  <p className="text-sm text-white/45">{a.detalle}</p>
                </div>
              </div>

              <dl className="relative mt-6 space-y-4 text-sm">
                {[
                  ["Dosificación / parámetros", a.dosis],
                  ["Efecto fisiológico y fundamento", a.efecto],
                  ["Momento de aplicación", a.momento],
                ].map(([etiqueta, valor]) => (
                  <div key={etiqueta} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-indigo-200/70">{etiqueta}</dt>
                    <dd className="mt-1 leading-relaxed text-white/75">{valor}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-white/35">
          Material educativo. Respetar las precauciones de los agentes físicos (no aplicar calor ni frío directo sobre la herida sin cicatrizar).
        </p>
      </div>
    </>
  );
}
