/** @type {import('next').NextConfig} */
const nextConfig = {
  // La sección "Contraindicaciones" pasó a llamarse "Precauciones"
  async redirects() {
    return [{ source: "/contraindicaciones", destination: "/precauciones", permanent: true }];
  },
};

export default nextConfig;
