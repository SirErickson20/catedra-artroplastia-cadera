import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { evaluacion } from "@/data/content";

export const metadata = { title: "Evaluación kinésica" };

export default function EvaluacionPage() {
  const { titulo, descripcion, componentes, seguridad } = evaluacion;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Qué evaluar */}
        <section>
          <SectionTitle titulo={componentes.titulo} subtitulo={componentes.subtitulo} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {componentes.items.map((c) => (
              <Card key={c.titulo} titulo={c.titulo} icono={c.icono}>
                {c.texto}
              </Card>
            ))}
          </div>
        </section>

        {/* Algoritmo de seguridad */}
        <section className="mt-20">
          <SectionTitle titulo={seguridad.titulo} subtitulo={seguridad.subtitulo} />
          <p className="mt-4 max-w-3xl text-white/60">{seguridad.intro}</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="hidden grid-cols-[14rem_1fr_auto] gap-6 border-b border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white/40 sm:grid">
              <span>Parámetro clínico</span>
              <span>Criterio de seguridad requerido</span>
              <span>Estado</span>
            </div>
            <ul className="divide-y divide-white/5">
              {seguridad.filas.map((f) => (
                <li key={f.parametro} className="grid gap-1 px-6 py-4 sm:grid-cols-[14rem_1fr_auto] sm:items-center sm:gap-6">
                  <span className="font-semibold text-white">{f.parametro}</span>
                  <span className="text-sm text-white/70">{f.criterio}</span>
                  <span className="self-start rounded-full bg-pink-500/15 px-2.5 py-0.5 text-xs font-semibold text-pink-200 ring-1 ring-pink-400/30 sm:self-auto">
                    Obligatorio
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className="mt-10 text-xs text-white/35">
          Material educativo. La evaluación se adapta a cada paciente y respeta las precauciones indicadas por el cirujano.
        </p>
      </div>
    </>
  );
}
