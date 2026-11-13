/** @type {import('next').NextConfig} */
const nextConfig = {
  // Direcciones viejas que redirigen a las secciones renombradas
  async redirects() {
    return [
      { source: "/contraindicaciones", destination: "/precauciones", permanent: true },
      { source: "/tratamiento", destination: "/abordaje-kinesico", permanent: true },
    ];
  },
};

export default nextConfig;
