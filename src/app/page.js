import Link from "next/link";
import Card from "@/components/Card";
import CarruselCurvo from "@/components/CarruselCurvo";
import Bloques from "@/components/bloques/Bloques";
import SectionTitle from "@/components/SectionTitle";
import Reloj from "@/components/Reloj";
import { Esquinas } from "@/components/Loader";
import { inicio } from "@/data/content";

export default function InicioPage() {
  const { hero, carrusel, bloques, bienvenida, resumen } = inicio;

  return (
    <>
      {/* Hero oscuro estilo "pantalla de cine" */}
      <section className="relative isolate overflow-hidden bg-tinta text-white">
        {/* Resplandor violeta en los bordes */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left,rgba(130,38,209,0.45),transparent_45%),radial-gradient(ellipse_at_right,rgba(130,38,209,0.45),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-brand-900/60 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100svh-64px)] max-w-7xl flex-col px-4 pb-6 pt-10 sm:px-6 sm:pt-14">
          {/* Esquinas de visor alrededor del hero */}
          <div className="pointer-events-none absolute inset-3 sm:inset-5">
            <Esquinas className="border-white/30" tamano="h-6 w-6" grosor="1px" />
          </div>

          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-100/70">
            {hero.etiqueta}
          </p>

          <h1 className="mt-4 text-center font-display text-[clamp(2.2rem,8.5vw,6.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
            {hero.tituloLineas.map((linea, i) => (
              <span
                key={linea}
                className={`block bg-clip-text text-transparent ${
                  i === 0 ? "bg-linear-to-b from-white to-white" : "bg-linear-to-b from-[#d9cfe6] to-[#8c7da3]"
                }`}
              >
                {linea}
              </span>
            ))}
          </h1>

          <div className="my-6 flex-1 content-center sm:my-8">
            <CarruselCurvo items={carrusel} />
          </div>

          <div className="mx-auto max-w-xl text-center">
            <p className="text-lg italic leading-snug text-white/80 sm:text-xl">{hero.subtitulo}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href={hero.botonPrincipal.href}
                className="rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/50 transition hover:bg-brand-500"
              >
                {hero.botonPrincipal.label}
              </Link>
              <Link
                href={hero.botonSecundario.href}
                className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {hero.botonSecundario.label}
              </Link>
            </div>
          </div>

          {/* Barra inferior */}
          <div className="mt-8 flex items-center justify-between px-2 text-[11px] uppercase tracking-widest text-white/50">
            <span>{hero.pieIzquierda}</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
              <Reloj />
            </span>
          </div>
        </div>
      </section>

      {/* Bloques animados: Clínica, Rehabilitación y Recursos */}
      <Bloques datos={bloques} />

      {/* Bienvenida */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(130,38,209,0.18),transparent_70%)]" />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <SectionTitle titulo={`${bienvenida.titulo}.`} subtitulo={bienvenida.subtitulo} centrado />
          {bienvenida.parrafos.map((p, i) => (
            <p key={i} className="mt-5 leading-relaxed text-white/60">{p}</p>
          ))}
          {bienvenida.destacado && (
            <div className="mt-10 rounded-2xl border border-brand-500/40 bg-brand-500/10 p-6 text-left shadow-[0_0_40px_-10px_rgba(130,38,209,0.5)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-100">🛡️ {bienvenida.destacado.titulo}</p>
              <p className="mt-2 leading-relaxed text-white/80">{bienvenida.destacado.texto}</p>
            </div>
          )}
        </div>
      </section>

      {/* Resumen general */}
      <section id="resumen" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-14 sm:px-6">
        <SectionTitle titulo={resumen.titulo} subtitulo={resumen.subtitulo} centrado />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resumen.temas.map((t) => (
            <Card key={t.titulo} titulo={t.titulo}>
              {t.texto}
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
