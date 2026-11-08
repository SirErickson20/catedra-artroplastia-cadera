import { footer, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/30 text-white/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Cátedra */}
        <div>
          <p className="font-semibold text-white">{site.catedra}</p>
          <p className="mt-1 text-sm">{site.tema}</p>
          <p className="mt-1 text-sm text-white/40">{site.institucion}</p>
        </div>

        {/* Créditos */}
        <dl className="space-y-3 text-sm">
          {footer.creditos.map((c) => (
            <div key={c.nombre}>
              <dt className="text-xs uppercase tracking-widest text-white/40">{c.rol}</dt>
              <dd className="font-medium text-white">{c.nombre}</dd>
            </div>
          ))}
        </dl>

        {/* Contacto */}
        <div className="text-sm">
          {footer.contacto && (
            <>
              <p className="text-xs uppercase tracking-widest text-white/40">Contacto</p>
              <a
                href={`mailto:${footer.contacto}`}
                className="mt-0.5 inline-block font-medium text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
              >
                {footer.contacto}
              </a>
            </>
          )}
          <p className="mt-4 text-white/45">{footer.texto}</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-white/35">
        © {site.anio} {site.catedra}
      </div>
    </footer>
  );
}
