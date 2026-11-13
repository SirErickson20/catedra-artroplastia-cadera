import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { abordaje } from "@/data/content";

export const metadata = { title: "Abordaje kinésico" };

export default function AbordajePage() {
  const { titulo, descripcion, principio, ejercicios } = abordaje;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Principio rector */}
        <div className="rounded-2xl border border-green-300/25 bg-green-400/[0.06] p-6 text-white/80">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-200/80">Principio de la semana 1</p>
          <p className="mt-2 leading-relaxed">{principio}</p>
        </div>

        <section className="mt-16">
          <SectionTitle titulo="Ejercicio terapéutico." subtitulo="Los 7 ejercicios de la fase aguda." />

          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {ejercicios.map((e, i) => (
              <li
                key={e.id}
                id={e.id}
                className="flex scroll-mt-24 flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:flex-row"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.imagen} alt={`Ilustración: ${e.nombre}`} className="aspect-square w-full object-cover sm:w-44 sm:shrink-0" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400 text-sm font-bold text-black">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold leading-tight text-white">{e.nombre}</h3>
                      {e.nombreEn && <p className="text-xs text-white/40">{e.nombreEn}</p>}
                    </div>
                  </div>
                  {e.dosis && (
                    <span className="mt-3 self-start rounded-full border border-green-300/30 bg-green-400/10 px-3 py-0.5 text-xs font-semibold text-green-200">
                      {e.dosis}
                    </span>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{e.descripcion}</p>
                  {e.objetivo && <p className="mt-2 text-sm leading-relaxed text-white/45">{e.objetivo}</p>}
                  <Link
                    href={`/videos#${e.id}`}
                    className="mt-4 self-start text-sm font-medium text-brand-100 transition hover:text-white"
                  >
                    {e.video ? "▶ Ver video" : "Video próximamente"} →
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Más del abordaje */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[
            { href: "/fisioterapia-aplicada", titulo: "Fisioterapia aplicada", texto: "Agentes físicos, parámetros y momento de aplicación." },
            { href: "/esquema-de-progresion", titulo: "Esquema día a día", texto: "Qué hacer del día 1 al 7 y cuándo progresar." },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/25"
            >
              <span>
                <span className="block font-semibold text-white">{l.titulo}</span>
                <span className="text-sm text-white/50">{l.texto}</span>
              </span>
              <span className="transition group-hover:translate-x-0.5">→</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
