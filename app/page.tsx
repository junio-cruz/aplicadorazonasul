import React from 'react';
import '@/styles/home.scss';

import ImageSlide from '@/components/imageSlide/ImageSlide';
import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <main className="main">
      <ImageSlide />
      <About />
      <section id="services">
        <h1>SERVIÇOS</h1>
      </section>
      <Contact />
    </main>
  );
}
