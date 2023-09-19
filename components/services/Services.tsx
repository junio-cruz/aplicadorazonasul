import './styles.scss';
import React from 'react';
import ServiceItem from '@/components/services/serviceItem/ServiceItem';
import Link from 'next/link';

type ServiceItem = {
  id: number;
  image: string;
  description: string;
  link: string;
  price?: number;
};
export default async function Services() {
  const dataFirstRow: ServiceItem[] = [
    {
      id: 1,
      image: '/about_1.webp',
      description: '+ de 30 anos trabalhando com revestimento no Rio!',
      link: '',
      price: 10,
    },
    {
      id: 2,
      image: '/about_2.webp',
      description: 'Oferecemos um período de manutenção após o serviço.',
      link: '',
      price: 10,
    },
    {
      id: 3,
      image: '/about_3.webp',
      description: 'Seu imovel impecável com nosso serviço de limpeza!',
      link: '',
      price: 10,
    },
    {
      id: 4,
      image: '/slide3.jpg',
      description: 'Seu imovel impecável com nosso serviço de limpeza!',
      link: '',
      price: 10,
    },
  ];
  const dataSecondRow: ServiceItem[] = [
    {
      id: 1,
      image: '/slide1.jpg',
      description: '+ de 30 anos trabalhando com revestimento no Rio!',
      link: '',
    },
    {
      id: 2,
      image: '/slide2.jpg',
      description: 'Oferecemos um período de manutenção após o serviço.',
      link: '',
    },
    {
      id: 3,
      image: '/slide3.jpg',
      description: 'Seu imovel impecável com nosso serviço de limpeza!',
      link: '',
    },
    {
      id: 4,
      image: '/slide4.jpg',
      description: 'Seu imovel impecável com nosso serviço de limpeza!',
      link: '',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="title-container">
        <div className="line-left" />
        <h2>Serviços</h2>
        <div className="line-right" />
      </div>
      <Link href="#contact" className="see-more">
        Ver mais
      </Link>
      <div className="service-item-container-one">
        {dataFirstRow.map(item => (
          <ServiceItem
            key={item.id}
            image={item.image}
            description={item.description}
            link={item.link}
            price={item.price}
          />
        ))}
      </div>
      <div className="service-item-container-two">
        {dataSecondRow.map(item => (
          <ServiceItem
            key={item.id}
            image={item.image}
            description={item.description}
            link={item.link}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
