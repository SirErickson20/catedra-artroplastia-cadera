/**
 * Video de YouTube responsivo (16:9).
 * Usa youtube-nocookie.com para no cargar cookies de seguimiento.
 * Si no hay youtubeId muestra un recuadro "Video próximamente".
 */
export default function VideoEmbed({ youtubeId, titulo }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-200">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
          <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="mt-2 text-sm font-medium">Video próximamente</span>
        </div>
      )}
    </div>
  );
}
