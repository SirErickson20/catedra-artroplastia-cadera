import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { fases } from "@/data/content";

export const metadata = { title: "Fases de rehabilitación" };

const panel =
  "rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";

export default function FasesPage() {
  const { titulo, descripcion, lista } = fases;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <SectionTitle titulo="Las fases, de un vistazo." subtitulo="Qué se hace en cada etapa y cuándo avanzar." />

        <ol className="relative mt-10 space-y-8">
          <span className="absolute bottom-6 left-[19px] top-6 w-px bg-linear-to-b from-amber-300/60 via-amber-300/20 to-transparent" aria-hidden="true" />
          {lista.map((f, i) => (
            <li key={f.nombre} className="relative flex gap-5">
              <span
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-bold ${
                  f.foco
                    ? "border-amber-300 bg-amber-400 text-black shadow-[0_0_24px_rgba(251,191,36,0.6)]"
                    : "border-white/25 bg-tinta text-white/70"
                }`}
              >
                {i + 1}
              </span>
              <div className={`${panel} relative flex-1 overflow-hidden p-6 ${f.foco ? "border-amber-300/40" : ""}`}>
                {f.foco && (
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(180,83,9,0.35),transparent_70%)]" />
                )}
                <div className="relative flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-white">{f.nombre}</h3>
                  <span className="rounded-full bg-amber-400/15 px-2.5 py-0.5 text-xs font-semibold text-amber-200 ring-1 ring-amber-300/30">
                    {f.periodo}
                  </span>
                  {f.foco && (
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-tinta">Foco de este material</span>
                  )}
                </div>
                <ul className="relative mt-4 space-y-2 text-sm text-white/75">
                  {f.intervenciones.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-amber-300" aria-hidden="true">•</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="relative mt-5 rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white/60">
                  <span className="font-semibold text-white/80">Para avanzar: </span>
                  {f.progresion}
                </p>
                {f.enlaces && (
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {f.enlaces.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/15"
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-xs text-white/35">
          Material educativo. Los plazos son orientativos y la progresión depende del criterio clínico y de las indicaciones del cirujano.
        </p>
      </div>
    </>
  );
}
