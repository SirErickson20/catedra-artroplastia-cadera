import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { evaluacion } from "@/data/content";

export const metadata = { title: "Evaluación kinésica" };

export default function EvaluacionPage() {
  const { titulo, descripcion, componentes, escalas } = evaluacion;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Componentes */}
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

        {/* Escalas y pruebas */}
        <section className="mt-20">
          <SectionTitle titulo={escalas.titulo} subtitulo={escalas.subtitulo} />
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <ul className="divide-y divide-white/5">
              {escalas.items.map((e) => (
                <li key={e.nombre} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:gap-6">
                  <span className="font-semibold text-white sm:w-56 sm:shrink-0">{e.nombre}</span>
                  <span className="flex-1 text-sm text-white/60">{e.mide}</span>
                  <span className="self-start rounded-full bg-pink-500/15 px-2.5 py-0.5 text-xs font-semibold text-pink-200 ring-1 ring-pink-400/30 sm:self-auto">
                    {e.rango}
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
