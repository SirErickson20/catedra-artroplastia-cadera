"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/content";

// Fases: "cargando" (contador) → "cubriendo" (paneles suben) → "revelando" (paneles salen) → "fin"
const DURACION_CONTADOR = 1600;
const PANELES = 4;

export default function Loader() {
  const [progreso, setProgreso] = useState(0);
  const [fase, setFase] = useState("cargando");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFase("fin");
      return;
    }

    const timers = [];
    let raf;
    const t0 = performance.now();

    const tick = (t) => {
      const p = Math.min(1, (t - t0) / DURACION_CONTADOR);
      setProgreso(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timers.push(setTimeout(() => setFase("cubriendo"), 150));
        timers.push(setTimeout(() => setFase("revelando"), 950));
        timers.push(setTimeout(() => setFase("fin"), 1900));
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, []);

  // Bloquea el scroll mientras se ve la pantalla de carga
  useEffect(() => {
    document.documentElement.style.overflow = fase === "fin" ? "" : "hidden";
  }, [fase]);

  if (fase === "fin") return null;

  const panelY = {
    cargando: "translate-y-full",
    cubriendo: "translate-y-0",
    revelando: "-translate-y-full",
  }[fase];

  return (
    <div
      id="loader"
      aria-hidden="true"
      className={`fixed inset-0 z-[100] ${fase === "revelando" ? "pointer-events-none" : ""}`}
    >
      {/* Fondo oscuro con el visor */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-tinta ${
          fase === "revelando" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative flex h-28 w-48 items-center justify-center">
          <Esquinas className="border-white" tamano="h-5 w-5" />
          <span className="font-display text-2xl font-bold tabular-nums text-white">{progreso}%</span>
          <span className="absolute -top-6 right-0 flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-white/60">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
            REC
          </span>
        </div>
        <p className="absolute bottom-10 text-[11px] uppercase tracking-[0.3em] text-white/40">
          {site.loaderTexto}
        </p>
      </div>

      {/* Paneles verticales que barren la pantalla */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: PANELES }).map((_, i) => (
          <div
            key={i}
            className={`h-full flex-1 border-r border-tinta last:border-r-0 transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)] ${panelY} ${
              i % 2 ? "bg-brand-700" : "bg-brand-600"
            }`}
            style={{ transitionDelay: `${i * 70}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

/** Cuatro esquinas tipo visor de cámara */
export function Esquinas({ className = "border-white", tamano = "h-4 w-4", grosor = "2px" }) {
  const base = `pointer-events-none absolute ${tamano} ${className}`;
  return (
    <>
      <span className={`${base} left-0 top-0`} style={{ borderTopWidth: grosor, borderLeftWidth: grosor }} />
      <span className={`${base} right-0 top-0`} style={{ borderTopWidth: grosor, borderRightWidth: grosor }} />
      <span className={`${base} bottom-0 left-0`} style={{ borderBottomWidth: grosor, borderLeftWidth: grosor }} />
      <span className={`${base} bottom-0 right-0`} style={{ borderBottomWidth: grosor, borderRightWidth: grosor }} />
    </>
  );
}
