import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-28 text-center">
      <p className="font-display text-7xl font-extrabold text-transparent bg-linear-to-b from-white to-white/30 bg-clip-text">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-white">Página no encontrada</h1>
      <p className="mt-2 text-white/50">La página que buscás no existe o se movió.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
