"use client";

import { useEffect, useState } from "react";
import { banderasRojas, banner, bibliografia, esquema, fisioterapia, precauciones, videos } from "@/data/content";

/** Elige la demo animada según el id de la tarjeta */
export function Demo({ tarjeta }) {
  switch (tarjeta.id) {
    case "banderas":
      return <DemoBanderas />;
    case "precauciones":
      return <DemoPrecauciones />;
    case "evaluacion":
      return <DemoEvaluacion />;
    case "objetivos":
      return <DemoObjetivos items={tarjeta.items} />;
    case "fases":
      return <DemoFases items={tarjeta.items} />;
    case "ejercicio":
      return <DemoEjercicio items={tarjeta.items} />;
    case "videos":
      return <DemoVideos />;
    case "fisioterapia":
      return <DemoFisioterapia />;
    case "esquema":
      return <DemoEsquema />;
    case "bibliografia":
      return <DemoBibliografia />;
    case "banner":
      return <DemoBanner />;
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
// Precauciones: lista que resalta un ítem por vez (no realizar / con precaución)
// ---------------------------------------------------------------------
function DemoPrecauciones() {
  // Movimientos a evitar (2 por abordaje) + algunas situaciones "con precaución"
  const movimientos = precauciones.movimiento.items.flatMap((p) =>
    p.evitar.slice(0, 2).map((texto) => ({ texto: `Evitar: ${texto.toLowerCase()}`, tipo: "absoluta" }))
  );
  const conPrecaucion = precauciones.grupos.flatMap((g) => g.items.filter((it) => it.tipo === "relativa").slice(0, 1)).slice(0, 2);
  const items = [...movimientos, ...conPrecaucion];
  const activo = useTick(1600) % items.length;
  const absolutas = items.filter((it) => it.tipo === "absoluta").length;

  return (
    <div className="flex h-full flex-col px-7 py-6">
      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        <span className="rounded-full bg-white/90 px-3 py-1 text-tinta">⛔ No realizar · {absolutas}</span>
        <span className="rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-amber-200">
          ⚠️ Con precaución · {items.length - absolutas}
        </span>
      </div>
      <ul className="mt-5 space-y-2">
        {items.map((it, i) => (
          <li
            key={it.texto}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-all duration-500 ${
              i === activo
                ? "scale-[1.02] border-cyan-300/50 bg-cyan-400/15 text-white shadow-[0_0_24px_rgba(34,211,238,0.25)]"
                : "border-white/5 bg-white/[0.03] text-white/50"
            }`}
          >
            <span aria-hidden="true">{it.tipo === "absoluta" ? "⛔" : "⚠️"}</span>
            <span className="truncate">{it.texto}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------
// Evaluación kinésica: EVA, goniometría y fuerza que cambian como en
// distintas sesiones de control
// ---------------------------------------------------------------------
const SESIONES = [
  { sesion: "Día 1", eva: 7, angulo: 35, fuerza: 2 },
  { sesion: "Semana 2", eva: 5, angulo: 55, fuerza: 3 },
  { sesion: "Semana 6", eva: 3, angulo: 75, fuerza: 4 },
  { sesion: "Semana 12", eva: 1, angulo: 90, fuerza: 5 },
];

function DemoEvaluacion() {
  const s = SESIONES[useTick(2200) % SESIONES.length];
  // Aguja del goniómetro: 0° sobre el brazo fijo (derecha), 90° hacia arriba
  const rad = (s.angulo * Math.PI) / 180;
  const x = 70 + 52 * Math.cos(rad);
  const y = 70 - 52 * Math.sin(rad);

  return (
    <div className="flex h-full flex-col gap-5 px-7 py-6">
      <span className="self-start rounded-full bg-pink-500/15 px-3 py-1 text-xs font-semibold text-pink-200 ring-1 ring-pink-400/30">
        Control · {s.sesion}
      </span>

      {/* EVA */}
      <div>
        <div className="flex justify-between text-xs uppercase tracking-widest text-white/45">
          <span>Dolor (EVA)</span>
          <span className="font-bold tabular-nums text-white">{s.eva}/10</span>
        </div>
        <div className="relative mt-2 h-2.5 rounded-full bg-linear-to-r from-green-400 via-amber-400 to-red-500">
          <span
            className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-tinta shadow-lg transition-[left] duration-700"
            style={{ left: `${s.eva * 10}%` }}
          />
        </div>
      </div>

      <div className="flex items-end gap-6">
        {/* Goniómetro */}
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-white/45">Flexión de cadera</p>
          <svg viewBox="0 0 140 80" className="mt-1 w-full max-w-[160px]">
            <path d="M18 70 A52 52 0 0 1 122 70" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round" />
            <line x1="70" y1="70" x2="122" y2="70" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
            <line
              x1="70" y1="70" x2={x} y2={y}
              stroke="#f472b6" strokeWidth="4" strokeLinecap="round"
              style={{ transition: "all 0.7s ease" }}
            />
            <circle cx="70" cy="70" r="5" fill="#fff" />
          </svg>
          <p className="text-2xl font-bold tabular-nums">{s.angulo}°</p>
        </div>

        {/* Daniels */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/45">Fuerza (Daniels)</p>
          <div className="mt-2 flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className={`h-8 w-3 rounded-full transition-colors duration-500 ${n <= s.fuerza ? "bg-pink-400" : "bg-white/10"}`}
              />
            ))}
          </div>
          <p className="mt-1 text-2xl font-bold tabular-nums">{s.fuerza}/5</p>
        </div>
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
        {v.imagen || v.youtubeId ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={v.imagen || `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}
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
// Fisioterapia aplicada: rota entre los agentes físicos con su onda
// ---------------------------------------------------------------------
function DemoFisioterapia() {
  const agentes = fisioterapia.agentes;
  const i = useTick(2600) % agentes.length;
  const a = agentes[i];

  return (
    <div className="flex h-full flex-col px-7 py-6">
      <div className="flex gap-2">
        {agentes.map((ag, j) => (
          <span
            key={ag.nombre}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${j === i ? "bg-indigo-300" : "bg-white/10"}`}
          />
        ))}
      </div>

      <div key={i} className="mt-6 motion-safe:animate-aparecer">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{a.icono}</span>
          <div>
            <p className="text-xl font-semibold">{a.nombre}</p>
            <p className="text-sm text-white/45">{a.detalle}</p>
          </div>
        </div>

        {/* Onda: hielo (gotas que bajan) o corriente (onda que avanza) */}
        <div className="mt-6 h-16 overflow-hidden rounded-lg border border-white/10 bg-black/30">
          <svg viewBox="0 0 400 64" preserveAspectRatio="none" className="h-full w-[200%] motion-safe:animate-[onda_2.5s_linear_infinite]">
            <path
              d={
                i === 0
                  ? "M0 32 Q25 20 50 32 T100 32 T150 32 T200 32 T250 32 T300 32 T350 32 T400 32"
                  : i === 1
                    ? "M0 32 Q12 4 25 32 T50 32 T75 32 T100 32 T125 32 T150 32 T175 32 T200 32 T225 32 T250 32 T275 32 T300 32 T325 32 T350 32 T375 32 T400 32"
                    : "M0 54 L0 10 L60 10 L60 54 L100 54 L100 10 L160 10 L160 54 L200 54 L200 10 L260 10 L260 54 L300 54 L300 10 L360 10 L360 54 L400 54"
              }
              fill="none"
              stroke="#a5b4fc"
              strokeWidth="3"
            />
          </svg>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/70">{a.dosis}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Esquema día a día: recorre los días con su meta
// ---------------------------------------------------------------------
function DemoEsquema() {
  const periodos = esquema.periodos;
  const i = useTick(2400) % periodos.length;
  const p = periodos[i];

  return (
    <div className="flex h-full flex-col px-7 py-6">
      <div className="grid grid-cols-5 gap-1.5">
        {periodos.map((x, j) => (
          <div
            key={x.periodo}
            className={`rounded-lg border px-1 py-2 text-center text-[11px] font-bold leading-tight transition-all duration-500 ${
              j === i
                ? "border-orange-300 bg-orange-500 text-white shadow-[0_0_20px_rgba(234,88,12,0.5)]"
                : j < i
                  ? "border-orange-300/30 bg-orange-500/20 text-orange-100"
                  : "border-white/10 bg-white/[0.03] text-white/40"
            }`}
          >
            {x.periodo.replace("Días ", "").replace("Día ", "")}
          </div>
        ))}
      </div>

      <div key={i} className="mt-5 motion-safe:animate-aparecer">
        <p className="text-xs uppercase tracking-widest text-white/45">{p.etiqueta}</p>
        <p className="mt-1 text-xl font-semibold">{p.periodo}</p>
        <ul className="mt-3 space-y-1.5 text-sm text-white/65">
          {p.acciones.slice(0, 3).map((a) => (
            <li key={a} className="flex gap-2">
              <span className="text-orange-300">•</span>
              <span className="line-clamp-1">{a}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/60">
          <span className="font-semibold text-white/85">Meta: </span>
          {p.meta}
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Bibliografía: las referencias suben como en un fichero
// ---------------------------------------------------------------------
function DemoBibliografia() {
  const refs = bibliografia.items.map((r) => {
    const [autores, resto = ""] = r.split(/\)\.\s/);
    return { autores: `${autores})`, titulo: resto.replace(/\*/g, "") };
  });

  return (
    <div className="h-full px-7 pt-6 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_85%,transparent)]">
      <div className="flex flex-col gap-3 pb-3 motion-safe:animate-subir">
        {[...refs, ...refs].map((r, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <p className="truncate text-xs font-semibold text-slate-200">{r.autores}</p>
            <p className="mt-1 line-clamp-2 text-sm text-white/55">{r.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Banner: la infografía se recorre de arriba hacia abajo
// ---------------------------------------------------------------------
function DemoBanner() {
  return (
    <div className="flex h-full items-center justify-center px-7 py-6">
      <div
        className="h-full w-full max-w-[280px] rounded-xl bg-no-repeat shadow-2xl shadow-black/60 ring-1 ring-white/15 motion-safe:animate-[paneo_14s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: `url(${banner.imagen})`, backgroundSize: "100% auto", backgroundPosition: "50% 0%" }}
      />
    </div>
  );
}
