import './styles.scss';
import React from 'react';
import AboutItem from '@/components/about/AboutItem/AboutItem';

type AboutItemProps = {
  id: number;
  image: string;
  description: string;
};

export default async function About() {
  const data: AboutItemProps[] = [
    {
      id: 1,
      image: '/about_1.webp',
      description: '+ de 30 anos trabalhando com revestimento no Rio!',
    },
    {
      id: 2,
      image: '/about_2.webp',
      description: 'Oferecemos um período de manutenção após o serviço.',
    },
    {
      id: 3,
      image: '/about_3.webp',
      description: 'Seu imovel impecável com nosso serviço de limpeza!',
    },
  ];
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
        {data.map(item => (
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
