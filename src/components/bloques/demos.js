"use client";

import { useEffect, useState } from "react";
import { banderasRojas, investigacion, videos } from "@/data/content";

/** Elige la demo animada según el id de la tarjeta */
export function Demo({ tarjeta }) {
  switch (tarjeta.id) {
    case "banderas":
      return <DemoBanderas />;
    case "objetivos":
      return <DemoObjetivos items={tarjeta.items} />;
    case "fases":
      return <DemoFases items={tarjeta.items} />;
    case "ejercicio":
      return <DemoEjercicio items={tarjeta.items} />;
    case "videos":
      return <DemoVideos />;
    case "investigacion":
      return <DemoInvestigacion />;
    default:
      return null;
  }
}

/** Contador que avanza cada `ms` milisegundos */
function useTick(ms) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), ms);
    return () => clearInterval(id);
  }, [ms]);
  return t;
}

// ---------------------------------------------------------------------
// Banderas rojas: lista de alertas que sube sin fin
// ---------------------------------------------------------------------
function DemoBanderas() {
  const filas = banderasRojas.alertas.map((a) => ({ titulo: a.titulo, signo: a.signos[0] }));
  return (
    <div className="h-full px-7 pt-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]">
      <div className="flex flex-col gap-5 pb-5 motion-safe:animate-subir">
        {[...filas, ...filas].map((f, i) => (
          <div key={i} className="flex items-baseline gap-3 whitespace-nowrap">
            <span className={`text-xl font-medium sm:text-2xl ${i % 2 ? "text-white/45" : "text-white/90"}`}>
              {f.titulo}
            </span>
            <span className="text-lg text-red-200/35 sm:text-xl">{f.signo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Objetivos: checklist con anillos de progreso
// ---------------------------------------------------------------------
function DemoObjetivos({ items }) {
  return (
    <ul className="space-y-3 px-7 py-6">
      {items.map((texto, i) => (
        <li
          key={texto}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5"
        >
          <svg viewBox="0 0 36 36" className="h-7 w-7 shrink-0 -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="94.25"
              className="motion-safe:animate-anillo"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          </svg>
          <span className="text-[15px] text-white/85">{texto}</span>
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------
// Fases: línea de tiempo que se va encendiendo
// ---------------------------------------------------------------------
function DemoFases({ items }) {
  const paso = useTick(1800) % items.length;
  return (
    <ol className="space-y-6 px-7 py-7">
      {items.map((f, i) => {
        const activo = i <= paso;
        return (
          <li key={f.nombre} className="relative flex items-start gap-4">
            {i < items.length - 1 && (
              <span
                className={`absolute left-4 top-8 h-[calc(100%_-_0.5rem)] w-px -translate-x-1/2 transition-colors duration-700 ${
                  i < paso ? "bg-amber-300" : "bg-white/15"
                }`}
              />
            )}
            <span
              className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-500 ${
                activo
                  ? "border-amber-300 bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                  : "border-white/20 bg-tinta text-white/50"
              }`}
            >
              {i + 1}
            </span>
            <div>
              <p className={`font-semibold transition-colors ${activo ? "text-white" : "text-white/45"}`}>{f.nombre}</p>
              <p className="text-sm text-white/40">{f.detalle}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

// ---------------------------------------------------------------------
// Indicación de ejercicio: contador de repeticiones
// ---------------------------------------------------------------------
function DemoEjercicio({ items }) {
  const t = useTick(320);
  const ciclos = items.map((e) => e.reps + 5); // reps + pausa
  const total = ciclos.reduce((a, b) => a + b, 0);
  let resto = t % total;
  let idx = 0;
  while (resto >= ciclos[idx]) {
    resto -= ciclos[idx];
    idx++;
  }
  const ej = items[idx];
  const rep = Math.min(resto, ej.reps);
  const C = 2 * Math.PI * 52;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 px-7">
      <div key={idx} className="text-center motion-safe:animate-aparecer">
        <p className="text-xs uppercase tracking-widest text-white/40">
          Ejercicio {idx + 1}/{items.length}
        </p>
        <p className="mt-1 text-xl font-semibold">{ej.nombre}</p>
        <span className="mt-2 inline-block rounded-full border border-green-300/30 bg-green-400/10 px-3 py-0.5 text-sm font-semibold text-green-300">
          {ej.series} × {ej.reps}
        </span>
      </div>

      <div className="relative h-32 w-32">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#4ade80"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - rep / ej.reps)}
            className="transition-[stroke-dashoffset] duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold tabular-nums">{rep}</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40">reps</span>
        </div>
      </div>

      <p className="text-center text-sm text-white/50">{ej.nota}</p>
    </div>
  );
}

// ---------------------------------------------------------------------
// Videos: mini reproductor que va rotando los videos
// ---------------------------------------------------------------------
function DemoVideos() {
  const lista = videos.lista;
  const i = useTick(3500) % lista.length;
  const v = lista[i];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-7">
      <div
        key={i}
        className="relative flex aspect-video w-full max-w-[300px] items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-fuchsia-500/60 via-brand-700 to-tinta shadow-2xl shadow-black/60 ring-1 ring-white/15 motion-safe:animate-aparecer"
      >
        {v.youtubeId ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <span className="text-5xl">🎬</span>
        )}
        {v.categoria && (
          <span className="absolute left-2 top-2 rounded bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
            {v.categoria}
          </span>
        )}
      </div>

      <p className="h-12 text-center text-base font-semibold leading-snug">{v.titulo}</p>

      <div className="h-1 w-full max-w-[300px] overflow-hidden rounded-full bg-white/15">
        <div key={i} className="h-full w-full bg-white motion-safe:animate-progreso" />
      </div>

      <div className="flex items-center gap-8">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 5h2v14H6zM20 5v14L9 12z" />
        </svg>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-tinta">
          <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 4v16l13-8z" />
          </svg>
        </span>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 5h2v14h-2zM4 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Investigación: integrantes orbitando
// ---------------------------------------------------------------------
const ESTRELLAS = [
  [12, 18], [80, 10], [65, 30], [22, 70], [88, 62], [45, 88], [8, 48], [70, 85], [35, 12], [92, 35],
];

function iniciales(nombre) {
  return nombre
    .replace(/^(Lic\.|Dr\.|Dra\.|Mg\.)\s*/i, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function DemoInvestigacion() {
  const personas = investigacion.grupos.flatMap((g) => g.personas);
  const radio = 115;

  return (
    <div className="relative flex h-full items-center justify-center">
      {ESTRELLAS.map(([x, y], i) => (
        <span
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full bg-white/50"
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      ))}

      <div
        className="absolute rounded-full border border-white/25 shadow-[0_0_40px_rgba(167,139,250,0.35)]"
        style={{ width: radio * 2, height: radio * 2 }}
      />
      <div className="absolute h-[140px] w-[140px] rounded-full border border-white/10" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-600/40 text-3xl shadow-[0_0_40px_rgba(155,63,230,0.6)]">
        🔬
      </div>

      <div className="absolute motion-safe:animate-orbitar" style={{ width: radio * 2, height: radio * 2 }}>
        {personas.map((p, i) => {
          const ang = (i / personas.length) * 360;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${ang}deg) translateY(-${radio}px) rotate(${-ang}deg)` }}
            >
              <span className="flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-linear-to-b from-brand-500 to-brand-900 text-xs font-bold shadow-lg motion-safe:animate-contraorbitar">
                {iniciales(p.nombre)}
              </span>
            </div>
          );
        })}
      </div>

      <p className="absolute bottom-5 text-xs uppercase tracking-widest text-white/40">
        {personas.length} integrantes · {investigacion.grupos.length} equipos
      </p>
    </div>
  );
}
