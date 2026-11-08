import Link from "next/link";
import Card from "@/components/Card";
import CarruselCurvo from "@/components/CarruselCurvo";
import Reloj from "@/components/Reloj";
import { Esquinas } from "@/components/Loader";
import { inicio } from "@/data/content";

export default function InicioPage() {
  const { hero, carrusel, bienvenida, secciones, resumen } = inicio;

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
            <p className="text-sm uppercase tracking-wider text-white/70">{hero.subtitulo}</p>
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

      {/* Bienvenida */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-brand-900">{bienvenida.titulo}</h2>
        {bienvenida.parrafos.map((p, i) => (
          <p key={i} className="mt-4 leading-relaxed text-slate-700">{p}</p>
        ))}
      </section>

      {/* Accesos a secciones */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {secciones.map((s) => (
            <Card key={s.href} href={s.href} titulo={s.titulo} icono={s.icono}>
              {s.resumen}
            </Card>
          ))}
        </div>
      </section>

      {/* Resumen general */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-brand-900">{resumen.titulo}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
