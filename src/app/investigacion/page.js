import PageHeader from "@/components/PageHeader";
import { investigacion } from "@/data/content";

export const metadata = { title: "Investigación" };

function iniciales(nombre) {
  return nombre
    .replace(/^(Lic\.|Dr\.|Dra\.|Mg\.)\s*/i, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function InvestigacionPage() {
  const { titulo, descripcion, grupos, bibliografia } = investigacion;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-14 sm:px-6">
        {grupos.map((grupo) => (
          <section key={grupo.titulo}>
            <h2 className="text-2xl font-bold text-brand-900">{grupo.titulo}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {grupo.personas.map((persona, i) => (
                <article
                  key={`${persona.nombre}-${i}`}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
                    {iniciales(persona.nombre)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{persona.nombre}</h3>
                    <p className="text-sm font-medium text-brand-600">{persona.rol}</p>
                    {persona.detalle && <p className="mt-1 text-sm text-slate-500">{persona.detalle}</p>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-bold text-brand-900">{bibliografia.titulo}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">
            {bibliografia.items.map((ref, i) => (
              <li key={i}>{ref}</li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
