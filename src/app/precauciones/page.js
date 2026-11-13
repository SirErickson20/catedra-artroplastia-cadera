import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { precauciones } from "@/data/content";

export const metadata = { title: "Precauciones" };

const estilosTipo = {
  absoluta: { etiqueta: "No realizar", clase: "bg-white text-tinta", marca: "⛔", leyenda: "Contraindicado: no se realiza" },
  relativa: {
    etiqueta: "Con precaución",
    clase: "bg-amber-400/15 text-amber-200 ring-1 ring-amber-300/40",
    marca: "⚠️",
    leyenda: "Se evalúa caso a caso",
  },
};

const panel =
  "rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";

export default function PrecaucionesPage() {
  const { titulo, descripcion, diferencia, movimiento, grupos } = precauciones;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Precauciones de movimiento según abordaje */}
        <section>
          <SectionTitle titulo={`${movimiento.titulo}.`} subtitulo={movimiento.nota} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {movimiento.items.map((p) => (
              <div key={p.abordaje} className={`${panel} relative overflow-hidden`}>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,rgba(14,116,144,0.3),transparent_70%)]" />
                <h3 className="relative font-semibold text-cyan-100">Abordaje {p.abordaje}</h3>
                <p className="relative mt-3 text-xs font-semibold uppercase tracking-widest text-white/40">Evitar</p>
                <ul className="relative mt-2 space-y-1.5 text-sm text-white/80">
                  {p.evitar.map((e) => (
                    <li key={e} className="flex gap-2">
                      <span className="text-red-400" aria-hidden="true">✕</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Diferencia con banderas rojas */}
        <section className="mt-20">
          <SectionTitle titulo="¿En qué se diferencian?" subtitulo="Bandera roja no es lo mismo que precaución." />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {diferencia.map((d) => {
              const contenido = (
                <>
                  <p className="text-3xl" aria-hidden="true">{d.icono}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{d.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{d.texto}</p>
                  {d.href && <span className="mt-3 inline-block text-sm font-medium text-brand-100">Ver banderas rojas →</span>}
                </>
              );
              return d.href ? (
                <Link key={d.titulo} href={d.href} className={`${panel} transition hover:border-red-400/40`}>
                  {contenido}
                </Link>
              ) : (
                <div key={d.titulo} className={`${panel} border-cyan-400/30 bg-cyan-400/[0.05]`}>
                  {contenido}
                </div>
              );
            })}
          </div>
        </section>

        {/* Qué no realizar / con precaución */}
        <section className="mt-20">
          <SectionTitle titulo="Qué no realizar y qué requiere precaución." subtitulo="Según el procedimiento, los agentes físicos y el ejercicio." />

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/55">
            {Object.entries(estilosTipo).map(([tipo, e]) => (
              <span key={tipo} className="flex items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${e.clase}`}>{e.etiqueta}</span>
                {e.leyenda}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {grupos.map((g) => (
              <div key={g.titulo} className={panel}>
                <h3 className="text-lg font-semibold text-white">{g.titulo}</h3>
                <ul className="mt-4 space-y-3">
                  {g.items.map((it) => {
                    const e = estilosTipo[it.tipo] ?? estilosTipo.relativa;
                    return (
                      <li key={it.texto} className="flex items-start gap-3 border-t border-white/5 pt-3 first:border-t-0 first:pt-0">
                        <span className="mt-0.5 text-base" aria-hidden="true">{e.marca}</span>
                        <div className="flex-1">
                          <p className="text-sm text-white/85">{it.texto}</p>
                          {it.detalle && <p className="mt-0.5 text-xs text-white/40">{it.detalle}</p>}
                        </div>
                        <span className={`shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold ${e.clase}`}>
                          {e.etiqueta}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-10 text-xs text-white/35">
          Material educativo. Las indicaciones definitivas dependen del cirujano tratante y del criterio clínico.
        </p>
      </div>
    </>
  );
}
