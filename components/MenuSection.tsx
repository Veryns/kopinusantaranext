"use client";

import Image from "next/image";
import { useState } from "react";

type MenuItem = {
  src: string;
  width: number;
  height: number;
  name: string;
  desc: string;
  price: string;
};

const menu: MenuItem[] = [
  {
    src: "/images/kopi-susu-gula-aren.jpeg",
    width: 736,
    height: 981,
    name: "Kopi Susu Gula Aren",
    desc: "Espresso robusta lokal dipadukan susu segar dan gula aren asli.",
    price: "Rp 25.000",
  },
  {
    src: "/images/kopi-tubruk.jpeg",
    width: 736,
    height: 1104,
    name: "Kopi Tubruk Nusantara",
    desc: "Kopi hitam tradisional, diseduh kasar khas warung kopi rumahan.",
    price: "Rp 27.000",
  },
  {
    src: "/images/cappucino.jpeg",
    width: 736,
    height: 736,
    name: "Cappuccino",
    desc: "Minuman kopi khas Italia yang dibuat dari perbandingan seimbang antara espreso, susu panas, dan busa susu.",
    price: "Rp 24.000",
  },
  {
    src: "/images/americano.jpeg",
    width: 736,
    height: 1104,
    name: "Americano",
    desc: "Minuman kopi hitam yang dibuat dengan mencampurkan satu atau dua shot espresso dengan air panas",
    price: "Rp 22.000",
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [pop, setPop] = useState(false);

  function toggleLike() {
    if (liked) {
      setCount((c) => Math.max(0, c - 1));
      setLiked(false);
    } else {
      setCount((c) => c + 1);
      setLiked(true);
      setPop(true);
      setTimeout(() => setPop(false), 250);
    }
  }

  return (
    <article className="card menu-card h-100">
      <Image
        src={item.src}
        alt={item.name}
        width={item.width}
        height={item.height}
        className="card-img-top menu-img"
        sizes="(min-width: 992px) 25vw, (min-width: 576px) 50vw, 100vw"
      />
      <div className="card-body d-flex flex-column">
        <h3 className="h5">{item.name}</h3>
        <p className="card-text">{item.desc}</p>
        <div className="menu-footer mt-auto">
          <span className="price">{item.price}</span>
          <div className="like-widget">
            <button
              type="button"
              aria-label="Suka menu ini"
              aria-pressed={liked}
              className={`like-btn${liked ? " liked" : ""}${pop ? " like-pop" : ""}`}
              onClick={toggleLike}
            >
              <span className="like-icon">{liked ? "♥" : "♡"}</span>
            </button>
            <span key={count} className="like-count">
              {count}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="menu-section container text-center">
      <h2>Menu Favorit Kami</h2>
      <p className="section-lead">Dipilih dari biji kopi pilihan berbagai daerah di Indonesia.</p>
      <div className="row g-4 text-start">
        {menu.map((item) => (
          <div className="col-12 col-sm-6 col-lg-3" key={item.name}>
            <MenuCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
