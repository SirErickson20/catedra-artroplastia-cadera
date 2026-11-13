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
          {lista.map((video, i) => (
            <article
              key={video.id}
              id={video.id}
              className="scroll-mt-24 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-white/20"
            >
              <VideoEmbed archivo={video.archivo} youtubeId={video.youtubeId} titulo={video.titulo} />
              <div className="px-2 pb-2 pt-4">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-500/15 px-2.5 py-0.5 text-xs font-semibold text-brand-100 ring-1 ring-brand-500/30">
                    {video.categoria}
                  </span>
                  {video.dosis && (
                    <span className="rounded-full bg-green-400/10 px-2.5 py-0.5 text-xs font-semibold text-green-200 ring-1 ring-green-300/30">
                      {video.dosis}
                    </span>
                  )}
                </div>
                <h2 className="mt-3 text-lg font-semibold text-white">
                  {i + 1}. {video.titulo}
                </h2>
                <p className="mt-1 text-sm text-white/55">{video.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
