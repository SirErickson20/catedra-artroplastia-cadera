import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { investigacion } from "@/data/content";
import { iniciales } from "@/lib/iniciales";

export const metadata = { title: "Investigación" };

export default function InvestigacionPage() {
  const { titulo, descripcion, grupos, bibliografia } = investigacion;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        {grupos.map((grupo) => (
          <section key={grupo.titulo}>
            <SectionTitle titulo={`${grupo.titulo}.`} />
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {grupo.personas.map((persona, i) => (
                <article
                  key={`${persona.nombre}-${i}`}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-white/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-linear-to-b from-brand-500 to-brand-900 font-semibold text-white">
                    {iniciales(persona.nombre)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{persona.nombre}</h3>
                    <p className="text-sm font-medium text-brand-100/80">{persona.rol}</p>
                    {persona.detalle && <p className="mt-1 text-sm text-white/45">{persona.detalle}</p>}
                    {persona.contacto && (
                      <a
                        href={`mailto:${persona.contacto}`}
                        className="mt-1 inline-block text-sm text-white/60 underline decoration-white/25 underline-offset-4 transition hover:text-white"
                      >
                        {persona.contacto}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section>
          <SectionTitle titulo={`${bibliografia.titulo}.`} />
          <ol className="mt-6 list-decimal space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] py-6 pl-12 pr-6 text-white/70 marker:text-white/40">
            {bibliografia.items.map((ref, i) => (
              <li key={i}>{ref}</li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
