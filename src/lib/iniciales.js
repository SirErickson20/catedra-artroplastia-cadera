/**
 * Iniciales de nombre + apellido.
 * "Erick Enrique Miranda" → "EM" · "Nahuel Facundo Llanes Severich" → "NL"
 * (con 4 palabras o más se toma el primer apellido: la anteúltima palabra)
 */
export function iniciales(nombre) {
  const palabras = nombre.replace(/^(Lic\.|Dr\.|Dra\.|Mg\.)\s*/i, "").trim().split(/\s+/);
  if (palabras.length === 1) return palabras[0].slice(0, 2).toUpperCase();
  const apellido = palabras.length >= 4 ? palabras[palabras.length - 2] : palabras[palabras.length - 1];
  return (palabras[0][0] + apellido[0]).toUpperCase();
}
