import Link from "next/link";
import { footer, navLinks, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-white">{site.catedra}</p>
          <p className="mt-1 text-sm">{site.tema}</p>
          <p className="mt-1 text-sm opacity-80">{site.institucion}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Secciones</p>
          <ul className="mt-2 space-y-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p>{footer.texto}</p>
          {footer.contacto && (
            <p className="mt-2">
              Contacto:{" "}
              <a href={`mailto:${footer.contacto}`} className="underline hover:text-white">
                {footer.contacto}
              </a>
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
        © {site.anio} {site.catedra}
      </div>
    </footer>
  );
}
