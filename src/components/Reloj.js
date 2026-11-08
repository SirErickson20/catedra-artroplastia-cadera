"use client";

import { useEffect, useState } from "react";

/** Reloj en vivo (HH:MM:SS). En el servidor muestra guiones para evitar diferencias de hidratación. */
export default function Reloj({ className = "" }) {
  const [hora, setHora] = useState("--:--:--");

  useEffect(() => {
    const actualizar = () =>
      setHora(new Date().toLocaleTimeString("es-AR", { hour12: false }));
    actualizar();
    const id = setInterval(actualizar, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className={`tabular-nums ${className}`}>{hora}</span>;
}
