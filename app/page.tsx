import type { JSX } from "react";
import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const NAMA_LENGKAP = "Steven Verdychen";
const NIM = "535250081";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />

      <section id="beranda" className="hero">
        <div className="hero-text">
          <h1>
            Secangkir Nusantara,
            <br />
            Diseduh dengan Cerita
          </h1>
          <p>
            Kedai kopi rumahan yang mengangkat biji kopi asli daerah. Diseduh hangat, disajikan dekat dengan
            rumahmu.
          </p>
          <a href="#menu" className="btn btn-caramel">
            Lihat Menu
          </a>
        </div>
      </section>

      <main>
        <MenuSection />
        <AboutSection />
        <FaqSection />
      </main>

      <Footer nama={NAMA_LENGKAP} nim={NIM} />
    </>
  );
}
