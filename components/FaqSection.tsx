"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Apakah kopi yang digunakan asli dari petani lokal?",
    a: "Ya, seluruh biji kopi yang kami gunakan berasal dari petani di berbagai daerah di Indonesia dan diseleksi langsung oleh tim kami.",
  },
  {
    q: "Apakah tersedia layanan pesan antar?",
    a: "Tersedia. Kamu bisa memesan melalui WhatsApp di 0812-3456-7890 dan pesanan akan diantar ke area sekitar kedai.",
  },
  {
    q: "Bisakah tingkat kemanisan atau gula diatur sesuai selera?",
    a: "Tentu. Kamu bisa meminta tingkat gula lebih sedikit, normal, atau lebih banyak saat memesan, baik langsung maupun via WhatsApp.",
  },
  {
    q: "Apakah ada menu kopi tanpa kafein atau non-kopi?",
    a: "Saat ini fokus menu kami adalah racikan kopi. Untuk pilihan rendah kafein, kamu bisa memilih Kopi Susu Gula Aren dengan porsi espresso lebih sedikit — cukup sampaikan saat memesan.",
  },
  {
    q: "Apakah kedai buka setiap hari termasuk hari libur?",
    a: "Kedai kami buka setiap hari, termasuk akhir pekan dan sebagian besar hari libur nasional, pukul 08.00 - 21.00 WIB.",
  },
];

export default function FaqSection() {
  // Hanya satu jawaban terbuka pada satu waktu
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section container text-center">
      <h2>Pertanyaan yang Sering Diajukan</h2>
      <p className="section-lead">
        Masih ada yang ingin ditanyakan? Klik pertanyaan di bawah untuk melihat jawabannya.
      </p>
      <div className="faq-list text-start">
        {faqs.map((f, i) => {
          const active = openIndex === i;
          return (
            <div className="faq-item" key={f.q}>
              <div
                className={`faq-question${active ? " active" : ""}`}
                role="button"
                tabIndex={0}
                aria-expanded={active}
                onClick={() => setOpenIndex(active ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIndex(active ? null : i);
                  }
                }}
              >
                {f.q}
                <span className="faq-icon">+</span>
              </div>
              <div className={`faq-answer${active ? " open" : ""}`}>
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
