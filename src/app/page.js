import Link from "next/link";
import Card from "@/components/Card";
import { inicio } from "@/data/content";

export default function InicioPage() {
  const { hero, bienvenida, secciones, resumen } = inicio;

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-brand-700 via-brand-600 to-brand-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-100">{hero.etiqueta}</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">{hero.titulo}</h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-100">{hero.subtitulo}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={hero.botonPrincipal.href}
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow hover:bg-brand-50"
            >
              {hero.botonPrincipal.label}
            </Link>
            <Link
              href={hero.botonSecundario.href}
              className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {hero.botonSecundario.label}
            </Link>
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
