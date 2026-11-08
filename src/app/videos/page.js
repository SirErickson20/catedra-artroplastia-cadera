import PageHeader from "@/components/PageHeader";
import VideoEmbed from "@/components/VideoEmbed";
import { videos } from "@/data/content";

export const metadata = { title: "Videos" };

export default function VideosPage() {
  const { titulo, descripcion, lista } = videos;

  return (
    <>
      <PageHeader titulo={titulo} descripcion={descripcion} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {lista.map((video) => (
            <article
              key={video.titulo}
              className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-white/20"
            >
              <VideoEmbed youtubeId={video.youtubeId} titulo={video.titulo} />
              <div className="px-2 pb-2 pt-4">
                {video.categoria && (
                  <span className="rounded-full bg-brand-500/15 px-2.5 py-0.5 text-xs font-semibold text-brand-100 ring-1 ring-brand-500/30">
                    {video.categoria}
                  </span>
                )}
                <h2 className="mt-3 text-lg font-semibold text-white">{video.titulo}</h2>
                <p className="mt-1 text-sm text-white/55">{video.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
