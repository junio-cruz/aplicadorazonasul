import React from 'react';
import '@/styles/home.scss';

import ImageSlide from '@/components/imageSlide/ImageSlide';
import About from "@/components/about/About";

export default function Home() {
  return (
    <main className="main">
      <ImageSlide />
      <About />
      <section id="services">
        <h1>SERVIÇOS</h1>
      </section>
      <section id="contact">
        <h1>CONTATOS</h1>
      </section>
    </main>
  );
}
