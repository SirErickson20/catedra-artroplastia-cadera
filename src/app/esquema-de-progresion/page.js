import PageHeader from "@/components/PageHeader";
import { esquema } from "@/data/content";

export const metadata = { title: "Esquema de progresión día a día" };

export default function EsquemaPage() {
  const { titulo, descripcion, periodos } = esquema;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ol className="relative space-y-8">
          <span className="absolute bottom-6 left-[27px] top-6 w-px bg-linear-to-b from-orange-300/60 via-orange-300/20 to-transparent" aria-hidden="true" />
          {periodos.map((p) => (
            <li key={p.periodo} className="relative flex gap-5">
              <span className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border border-orange-300/60 bg-orange-500/90 text-center text-[11px] font-bold leading-tight text-white shadow-[0_0_24px_rgba(234,88,12,0.45)]">
                {p.periodo.replace("Días", "Días\n").split("\n").map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </span>
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(194,65,12,0.25),transparent_70%)]" />
                <div className="relative flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h2 className="text-lg font-semibold text-white">{p.periodo}</h2>
                  <span className="rounded-full bg-orange-400/15 px-2.5 py-0.5 text-xs font-semibold text-orange-200 ring-1 ring-orange-300/30">
                    {p.etiqueta}
                  </span>
                </div>
                <ul className="relative mt-4 space-y-2 text-sm text-white/75">
                  {p.acciones.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="text-orange-300" aria-hidden="true">•</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="relative mt-5 rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white/60">
                  <span className="font-semibold text-white/80">Criterio de progresión / meta: </span>
                  {p.meta}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
