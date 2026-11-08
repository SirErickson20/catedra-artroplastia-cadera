import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { contraindicaciones } from "@/data/content";

export const metadata = { title: "Contraindicaciones" };

const estilosTipo = {
  absoluta: { etiqueta: "Absoluta", clase: "bg-slate-900 text-white", marca: "⛔" },
  relativa: { etiqueta: "Relativa", clase: "bg-amber-100 text-amber-800", marca: "⚠️" },
};

export default function ContraindicacionesPage() {
  const { titulo, descripcion, diferencia, grupos } = contraindicaciones;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {/* Diferencia con banderas rojas */}
        <section>
          <h2 className="text-2xl font-bold text-brand-900">¿En qué se diferencian?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {diferencia.map((d) => {
              const contenido = (
                <>
                  <p className="text-3xl" aria-hidden="true">{d.icono}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{d.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.texto}</p>
                  {d.href && <span className="mt-3 inline-block text-sm font-medium text-brand-600">Ver banderas rojas →</span>}
                </>
              );
              const clase = "block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";
              return d.href ? (
                <Link key={d.titulo} href={d.href} className={`${clase} transition hover:border-brand-500 hover:shadow-md`}>
                  {contenido}
                </Link>
              ) : (
                <div key={d.titulo} className={`${clase} border-l-4 border-l-brand-600`}>
                  {contenido}
                </div>
              );
            })}
          </div>
        </section>

        {/* Leyenda */}
        <div className="mt-12 flex flex-wrap gap-4 text-sm text-slate-600">
          {Object.entries(estilosTipo).map(([tipo, e]) => (
            <span key={tipo} className="flex items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${e.clase}`}>{e.etiqueta}</span>
              {tipo === "absoluta" ? "No se realiza" : "Se evalúa caso a caso / con precaución"}
            </span>
          ))}
        </div>

        {/* Grupos */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {grupos.map((g) => (
            <section key={g.titulo} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-brand-900">{g.titulo}</h2>
              <ul className="mt-4 space-y-3">
                {g.items.map((it) => {
                  const e = estilosTipo[it.tipo] ?? estilosTipo.relativa;
                  return (
                    <li key={it.texto} className="flex items-start gap-3 border-t border-slate-100 pt-3 first:border-t-0 first:pt-0">
                      <span className="mt-0.5 text-base" aria-hidden="true">{e.marca}</span>
                      <div className="flex-1">
                        <p className="text-sm text-slate-800">{it.texto}</p>
                        {it.detalle && <p className="mt-0.5 text-xs text-slate-500">{it.detalle}</p>}
                      </div>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${e.clase}`}>{e.etiqueta}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-500">
          Material educativo. Las indicaciones definitivas dependen del cirujano tratante y del criterio clínico.
        </p>
      </div>
    </>
  );
}
