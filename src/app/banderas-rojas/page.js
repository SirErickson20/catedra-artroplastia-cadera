import PageHeader from "@/components/PageHeader";
import { banderasRojas } from "@/data/content";

export const metadata = { title: "Banderas Rojas" };

const estilosGravedad = {
  emergencia: { etiqueta: "Emergencia", clase: "bg-alerta-700 text-white" },
  urgente: { etiqueta: "Derivación urgente", clase: "bg-alerta-500 text-white" },
  derivar: { etiqueta: "Derivar", clase: "bg-amber-500 text-white" },
};

export default function BanderasRojasPage() {
  const { titulo, descripcion, aviso, alertas, precauciones } = banderasRojas;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {/* Aviso general */}
        <div role="alert" className="flex gap-3 rounded-xl border-l-4 border-alerta-500 bg-alerta-50 p-4 text-alerta-700">
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
                className="flex flex-col rounded-2xl border border-slate-200 border-t-4 border-t-alerta-500 bg-white p-6 shadow-sm"
              >
                <span className={`self-start rounded-full px-2.5 py-0.5 text-xs font-semibold ${g.clase}`}>
                  {g.etiqueta}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">🚩 {alerta.titulo}</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {alerta.signos.map((signo) => (
                    <li key={signo} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-alerta-500" />
                      {signo}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Precauciones según abordaje */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-brand-900">{precauciones.titulo}</h2>
          <p className="mt-2 text-sm text-slate-500">{precauciones.nota}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {precauciones.items.map((p) => (
              <div key={p.abordaje} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-brand-700">Abordaje {p.abordaje}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Evitar</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {p.evitar.map((e) => (
                    <li key={e}>✕ {e}</li>
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
