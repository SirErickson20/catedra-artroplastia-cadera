"use client";

import Link from "next/link";
import { useState } from "react";
import { Demo } from "./demos";

/**
 * Sección de tarjetas con demo animada y pestañas de categorías.
 * Los datos vienen de inicio.bloques en src/data/content.js.
 */
export default function Bloques({ datos }) {
  const { titulo, subtitulo, categorias, tarjetas } = datos;
  const [categoria, setCategoria] = useState(categorias[0].id);
  const visibles = tarjetas.filter(
    (t) => categoria === "todo" || t.categorias.includes(categoria)
  );

  return (
    <section className="bg-tinta py-20 text-white [overflow-anchor:none]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">{titulo}</h2>
          <p className="max-w-md text-xl text-white/50 sm:text-2xl">{subtitulo}</p>
        </div>

        <div
          role="tablist"
          aria-label="Categorías"
          className="flex w-fit max-w-full gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-white/[0.03] p-1 sm:gap-1 sm:p-1.5 shadow-[inset_0_1px_8px_rgba(0,0,0,0.6)] [scrollbar-width:none]"
        >
          {categorias.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={categoria === c.id}
              onClick={() => setCategoria(c.id)}
              className={`whitespace-nowrap rounded-full px-2.5 py-2 text-xs sm:px-4 sm:text-sm font-medium transition ${
                categoria === c.id
                  ? "bg-white/10 text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_4px_12px_rgba(0,0,0,0.5)]"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fila de tarjetas con scroll horizontal */}
      <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pl-4 scroll-pl-4 [scrollbar-width:none] sm:pl-6 sm:scroll-pl-6 lg:snap-none lg:pl-[max(1.5rem,calc((100%_-_80rem)/2_+_1.5rem))] [&::-webkit-scrollbar]:hidden">
        {visibles.map((t, i) => (
          <Tarjeta key={`${categoria}-${t.id}`} tarjeta={t} indice={i} />
        ))}
        <div className="w-px shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}

function Tarjeta({ tarjeta: t, indice }) {
  return (
    <Link
      href={t.href}
      style={{ animationDelay: `${indice * 80}ms` }}
      className="group relative flex h-[560px] w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#100c18] transition-colors hover:border-white/25 motion-safe:animate-aparecer sm:w-[400px]"
    >
      {/* Brillo de color desde arriba */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-90"
        style={{
          background: `radial-gradient(120% 70% at 50% 0%, ${t.color}cc 0%, ${t.color}33 45%, transparent 75%)`,
        }}
      />

      <div className="relative flex items-center gap-4 px-7 pt-7">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-linear-to-b from-white/15 to-black/30 text-2xl shadow-lg shadow-black/40">
          {t.icono}
        </span>
        <span className="flex-1 text-xl font-medium leading-tight">{t.titulo}</span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5 transition group-hover:translate-x-0.5 group-hover:bg-white/15">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      <p className="relative px-7 pt-6 text-[15px] font-medium leading-relaxed text-white/90">
        {t.descripcion}
      </p>
      <div className="relative mx-7 mt-6 border-t border-white/10" />

      <div className="relative min-h-0 flex-1 overflow-hidden" aria-hidden="true">
        <Demo tarjeta={t} />
      </div>
    </Link>
  );
}
