"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/data/content";
import { Esquinas } from "@/components/Loader";

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  const esActivo = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-tinta/95 text-white backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setAbierto(false)}>
          <span className="relative flex h-10 w-12 items-center justify-center">
            <Esquinas className="border-white" tamano="h-2.5 w-2.5" />
            <span className="font-display text-base font-extrabold">K</span>
            <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xs font-semibold uppercase tracking-wider">{site.nombre}</span>
            <span className="hidden text-[11px] text-white/50 sm:block">Kinefisiatría Traumatológica y Reumatológica</span>
          </span>
        </Link>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-md px-2 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:bg-white/10 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {abierto ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
          Menú
        </button>

        {/* Menú escritorio */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  esActivo(link.href) ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menú móvil desplegable */}
      {abierto && (
        <ul className="border-t border-white/10 bg-tinta px-4 py-2 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setAbierto(false)}
                className={`block rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-widest ${
                  esActivo(link.href) ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
