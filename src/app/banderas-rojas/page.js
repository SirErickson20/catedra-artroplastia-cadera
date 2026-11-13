import Link from "next/link";
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
  const { titulo, descripcion, aviso, alertas } = banderasRojas;

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

        {/* Enlace a Precauciones */}
        <Link
          href="/precauciones"
          className="group mt-16 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
        >
          <SectionTitle titulo="Precauciones de movimiento." subtitulo="Qué evitar según el abordaje quirúrgico." />
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5 transition group-hover:translate-x-0.5 group-hover:bg-white/15">
            →
          </span>
        </Link>
      </div>
    </>
  );
}
