/**
 * Video de YouTube responsivo (16:9).
 * Usa youtube-nocookie.com para no cargar cookies de seguimiento.
 * Si no hay youtubeId muestra un recuadro "Video próximamente".
 */
export default function VideoEmbed({ youtubeId, titulo }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/[0.04] ring-1 ring-white/10">
      {youtubeId ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title={titulo}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(130,38,209,0.25),transparent_65%)] text-white/50">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5">
            <svg className="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="mt-3 text-sm font-medium">Video próximamente</span>
        </div>
      )}
    </div>
  );
}
