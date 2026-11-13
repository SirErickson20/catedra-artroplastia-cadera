import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { banner } from "@/data/content";
import { iniciales } from "@/lib/iniciales";

export const metadata = { title: "Banner" };

export default function BannerPage() {
  const { titulo, descripcion, imagen, alt, creditos } = banner;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {/* Infografía */}
        <figure className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_80px_-20px_rgba(130,38,209,0.45)]">
          <a href={imagen} target="_blank" rel="noopener noreferrer" title="Abrir en tamaño completo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imagen} alt={alt} width={1333} height={1600} className="h-auto w-full rounded-2xl" />
          </a>
        </figure>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={imagen}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ver en tamaño completo
          </a>
          <a
            href={imagen}
            download="banner-artroplastia-de-cadera.jpg"
            className="rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
          >
            Descargar banner
          </a>
        </div>

        {/* Créditos */}
        <section className="mt-20">
          <SectionTitle titulo="Créditos." subtitulo="Quiénes hicieron este material." />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {creditos.map((p) => (
              <article
                key={p.nombre}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-linear-to-b from-brand-500 to-brand-900 font-semibold text-white">
                  {iniciales(p.nombre)}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">{p.rol}</p>
                  <h3 className="font-semibold text-white">{p.nombre}</h3>
                  {p.detalle && <p className="mt-1 text-sm text-white/45">{p.detalle}</p>}
                  {p.contacto && (
                    <a
                      href={`mailto:${p.contacto}`}
                      className="mt-1 inline-block text-sm text-white/60 underline decoration-white/25 underline-offset-4 transition hover:text-white"
                    >
                      {p.contacto}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
