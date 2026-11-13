import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { objetivos } from "@/data/content";

export const metadata = { title: "Objetivos" };

export default function ObjetivosPage() {
  const { titulo, descripcion, general, especificos } = objetivos;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Objetivo general */}
        <section className="relative overflow-hidden rounded-[24px] border border-blue-300/25 bg-white/[0.03] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_0%,rgba(29,78,216,0.35),transparent_70%)]" />
          <p className="relative text-xs font-semibold uppercase tracking-widest text-blue-200/80">🎯 {general.titulo}</p>
          <p className="relative mt-4 text-lg leading-relaxed text-white/85 sm:text-xl">{general.texto}</p>
        </section>

        {/* Objetivos específicos */}
        <section className="mt-20">
          <SectionTitle titulo={especificos.titulo} subtitulo={especificos.subtitulo} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {especificos.items.map((o) => (
              <Card key={o.titulo} titulo={o.titulo} icono={o.icono}>
                {o.texto}
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
