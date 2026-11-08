import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { banderasRojas } from "@/data/content";

export const metadata = { title: "Banderas Rojas" };

const estilosGravedad = {
  emergencia: { etiqueta: "Emergencia", clase: "bg-red-600 text-white" },
  urgente: { etiqueta: "Derivación urgente", clase: "bg-red-500/15 text-red-200 ring-1 ring-red-400/40" },
  derivar: { etiqueta: "Derivar", clase: "bg-amber-400/15 text-amber-200 ring-1 ring-amber-300/40" },
};

export default function BanderasRojasPage() {
  const { titulo, descripcion, aviso, alertas, precauciones } = banderasRojas;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Aviso general */}
        <div role="alert" className="flex gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-100">
          <span className="text-xl" aria-hidden="true">⚠️</span>
          <p className="text-sm font-medium">{aviso}</p>
        </div>

        {/* Tarjetas de alerta */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alertas.map((alerta) => {
            const g = estilosGravedad[alerta.gravedad] ?? estilosGravedad.derivar;
            return (
              <article
                key={alerta.titulo}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-red-400/40"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,rgba(220,38,38,0.22),transparent_70%)]" />
                <span className={`relative self-start rounded-full px-2.5 py-0.5 text-xs font-semibold ${g.clase}`}>
                  {g.etiqueta}
                </span>
                <h2 className="relative mt-3 text-lg font-semibold text-white">🚩 {alerta.titulo}</h2>
                <ul className="relative mt-3 space-y-2 text-sm text-white/65">
                  {alerta.signos.map((signo) => (
                    <li key={signo} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {signo}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Precauciones según abordaje */}
        <section className="mt-20">
          <SectionTitle titulo={`${precauciones.titulo}.`} subtitulo={precauciones.nota} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {precauciones.items.map((p) => (
              <div
                key={p.abordaje}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <h3 className="font-semibold text-brand-100">Abordaje {p.abordaje}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/40">Evitar</p>
                <ul className="mt-2 space-y-1.5 text-sm text-white/75">
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
      </div>
    </>
  );
}
