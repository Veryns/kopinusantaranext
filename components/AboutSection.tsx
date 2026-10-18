const stats = [
  { value: "7+", label: "Daerah Asal Kopi" },
  { value: "50+", label: "Menu Racikan" },
  { value: "3", label: "Tahun Beroperasi" },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="about-section">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7 about-text">
            <h2>Cerita Kami</h2>
            <p>
              Kopi Nusantara dimulai dari dapur rumah kecil dengan satu mesin seduh manual. Kami percaya kopi
              terbaik datang dari biji yang jujur dan proses yang sabar. Setiap cangkir yang kami sajikan membawa
              cerita petani kopi dari berbagai daerah di Indonesia.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="row g-3 text-center">
              {stats.map((s) => (
                <div className="col-4 col-lg-12" key={s.label}>
                  <div className="stat h-100">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
