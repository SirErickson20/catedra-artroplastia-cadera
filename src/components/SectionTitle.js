/** Título de sección estilo Raycast: frase en blanco + bajada en gris */
export default function SectionTitle({ titulo, subtitulo, centrado = false, className = "" }) {
  return (
    <div className={`${centrado ? "text-center" : ""} ${className}`}>
      <h2 className="text-xl font-semibold text-white sm:text-2xl">{titulo}</h2>
      {subtitulo && <p className="text-xl text-white/45 sm:text-2xl">{subtitulo}</p>}
    </div>
  );
}
