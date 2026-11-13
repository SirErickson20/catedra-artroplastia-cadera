"use client";

import { useEffect, useRef } from "react";

/**
 * Carrusel infinito sobre una superficie curva (como una pantalla de cine
 * vista desde adentro): las tarjetas de los costados se acercan al espectador.
 */
const REPETICIONES = 2;
const VELOCIDAD = 0.035; // píxeles por milisegundo

export default function CarruselCurvo({ items }) {
  const contenedor = useRef(null);
  const tarjetas = useRef([]);
  const lista = Array.from({ length: REPETICIONES }, () => items).flat();

  useEffect(() => {
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let offset = 0;
    let ultimo = performance.now();
    let raf;
    let lento = false;

    const el = contenedor.current;
    const entrar = () => (lento = true);
    const salir = () => (lento = false);
    el.addEventListener("pointerenter", entrar);
    el.addEventListener("pointerleave", salir);

    const cuadro = (t) => {
      const dt = Math.min(t - ultimo, 50);
      ultimo = t;
      if (!reducir) offset += dt * VELOCIDAD * (lento ? 0.25 : 1);

      const ancho = el.clientWidth;
      const tarjeta = ancho < 640 ? 125 : ancho < 1024 ? 165 : 205;
      const paso = tarjeta + 18;
      const total = paso * lista.length;
      const radio = Math.max(ancho * 0.6, 380);

      tarjetas.current.forEach((nodo, i) => {
        if (!nodo) return;
        const x = ((((i * paso - offset) % total) + total) % total) - total / 2;
        const theta = x / radio;
        const visible = Math.abs(theta) < 1.25;
        const tx = radio * Math.sin(theta);
        const tz = radio * (1 - Math.cos(theta)) * 0.55;
        nodo.style.width = `${tarjeta}px`;
        nodo.style.opacity = visible ? "1" : "0";
        nodo.style.transform = `translate(-50%, -50%) translate3d(${tx}px, 0, ${tz}px) rotateY(${-theta}rad)`;
      });

      raf = requestAnimationFrame(cuadro);
    };
    raf = requestAnimationFrame(cuadro);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", entrar);
      el.removeEventListener("pointerleave", salir);
    };
  }, [lista.length]);

  return (
    <div
      ref={contenedor}
      aria-hidden="true"
      className="relative h-[230px] w-full overflow-hidden sm:h-[300px] lg:h-[360px]"
      style={{ perspective: "1100px" }}
    >
      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {lista.map((item, i) => (
          <div
            key={i}
            ref={(n) => (tarjetas.current[i] = n)}
            className={`absolute left-1/2 top-1/2 overflow-hidden rounded-lg opacity-0 shadow-2xl shadow-black/60 ring-1 ring-white/10 ${
              item.imagen ? "aspect-square" : "aspect-[3/4]"
            }`}
          >
            {item.imagen ? (
              // La imagen ya trae el título incluido
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.imagen} alt="" className="h-full w-full object-cover" />
            ) : (
              <>
                {item.fondo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.fondo} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-brand-500 via-brand-700 to-tinta text-5xl sm:text-6xl">
                    {item.icono}
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-3 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">{item.titulo}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
