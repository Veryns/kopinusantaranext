type FooterProps = { nama: string; nim: string };

export default function Footer({ nama, nim }: FooterProps) {
  return (
    <footer id="kontak" className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-sm-6 col-lg-4">
            <h3>Kopi Nusantara</h3>
            <p>Kedai kopi rumahan, dekat dengan rasa dan rumahmu.</p>
          </div>
          <div className="col-sm-6 col-lg-4">
            <h3>Kontak</h3>
            <p>WhatsApp: 0812-3456-7890</p>
            <p>Email: ngopi@kopinusantara.id</p>
          </div>
          <div className="col-sm-6 col-lg-4">
            <h3>Jam Buka</h3>
            <p>Setiap hari, Pukul 08.00 - 21.00 WIB</p>
          </div>
        </div>
        <p className="copyright">&copy; 2026 Kopi Nusantara</p>
        <p className="identity">
          {nama} &middot; NIM: {nim}
        </p>
      </div>
    </footer>
  );
}
