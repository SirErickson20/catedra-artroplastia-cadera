import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { objetivos } from "@/data/content";

export const metadata = { title: "Objetivos" };

export default function ObjetivosPage() {
  const { titulo, descripcion, generales, porFase } = objetivos;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Objetivos generales */}
        <section>
          <SectionTitle titulo={generales.titulo} subtitulo={generales.subtitulo} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {generales.items.map((o) => (
              <Card key={o.titulo} titulo={o.titulo} icono={o.icono}>
                {o.texto}
              </Card>
            ))}
          </div>
        </section>

        {/* Objetivos por fase */}
        <section className="mt-20">
          <SectionTitle titulo={porFase.titulo} subtitulo={porFase.subtitulo} />
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {porFase.fases.map((f, i) => (
              <li
                key={f.nombre}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_55%_at_50%_0%,rgba(29,78,216,0.3),transparent_70%)]" />
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/40 bg-blue-500/20 text-sm font-bold text-blue-100">
                  {i + 1}
                </span>
                <h3 className="relative mt-4 font-semibold text-white">{f.nombre}</h3>
                <p className="relative text-xs uppercase tracking-widest text-white/40">{f.periodo}</p>
                <ul className="relative mt-4 space-y-2 text-sm text-white/70">
                  {f.objetivos.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="text-blue-300" aria-hidden="true">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
