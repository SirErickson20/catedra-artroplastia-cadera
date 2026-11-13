import PageHeader from "@/components/PageHeader";
import { bibliografia } from "@/data/content";

export const metadata = { title: "Bibliografía" };

/** Convierte el texto entre *asteriscos* en cursiva */
function ConCursivas({ texto }) {
  return texto.split(/(\*[^*]+\*)/g).map((parte, i) =>
    parte.startsWith("*") && parte.endsWith("*") ? <em key={i}>{parte.slice(1, -1)}</em> : parte
  );
}

export default function BibliografiaPage() {
  const { titulo, descripcion, items } = bibliografia;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ol className="space-y-4">
          {items.map((ref, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold text-white/70">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-white/75 [&_em]:text-white">
                <ConCursivas texto={ref} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
