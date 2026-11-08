import { Inter, Unbounded } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { site } from "@/data/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded" });

export const metadata = {
  title: {
    default: `${site.tema} | ${site.catedra}`,
    template: `%s | ${site.tema}`,
  },
  description: site.descripcion,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${unbounded.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <noscript>
          <style>{`#loader{display:none}`}</style>
        </noscript>
        <Loader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
