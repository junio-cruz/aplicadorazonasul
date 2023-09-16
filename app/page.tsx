import React from 'react';
import '@/styles/home.scss';

import ImageSlide from '@/components/imageSlide/ImageSlide';

export default function Home() {
  return (
    <main className="main">
      <ImageSlide />
      <section id="services">
        <h1>SERVIÇOS</h1>
      </section>
      <section id="about">
        <h1>SOBRE NÓS</h1>
      </section>
      <section id="contact">
        <h1>CONTATOS</h1>
      </section>
    </main>
  );
}
