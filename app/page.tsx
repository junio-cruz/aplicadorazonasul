import React from 'react';
import '@/styles/home.scss';

import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Services from '@/components/services/Services';
import ImageSlide from '@/components/imageSlide/ImageSlide';

export default function Home() {
  return (
    <main className="main">
      <ImageSlide />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
