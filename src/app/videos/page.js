import PageHeader from "@/components/PageHeader";
import VideoEmbed from "@/components/VideoEmbed";
import { videos } from "@/data/content";

export const metadata = { title: "Videos" };

export default function VideosPage() {
  const { titulo, descripcion, lista } = videos;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {lista.map((video) => (
            <article key={video.titulo} className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <VideoEmbed youtubeId={video.youtubeId} titulo={video.titulo} />
              <div className="px-2 pb-2 pt-4">
                {video.categoria && (
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                    {video.categoria}
                  </span>
                )}
                <h2 className="mt-2 text-lg font-semibold text-slate-900">{video.titulo}</h2>
                <p className="mt-1 text-sm text-slate-600">{video.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
