import './styles.scss';
import React from 'react';
import AboutItem from '@/components/about/AboutItem/AboutItem';
import { aboutItems } from '@/utils/data';

export default async function About() {
  return (
    <section id="about" className="about">
      <div className="title-container">
        <div className="line-left" />
        <h2>Sobre nós</h2>
        <div className="line-right" />
      </div>
      <p>
        Atuando em todas as cidades do Rio de janeiro, renovar o piso este é o
        principal diferencial do nosso serviço. <br />
        Com as melhores práticas e técnicas de revestimento, seu piso fica com
        cara de novo, a cor da madeira fica mais evidente e bonita.
      </p>
      <div className="about-item-container">
        {aboutItems.map(item => (
          <AboutItem
            key={item.id}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
