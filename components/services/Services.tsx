import './styles.scss';
import React from 'react';
import ServiceItem from '@/components/services/serviceItem/ServiceItem';
import Link from 'next/link';
import { services } from '@/utils/data';

export default async function Services() {
  return (
    <section id="services" className="services">
      <div className="title-container">
        <div className="line-left" />
        <h2>Serviços</h2>
        <div className="line-right" />
      </div>
      <div className="service-details">
        <ul>
          <li>Raspagem sem poeira</li>
          <li>Apartamento mobilado</li>
        </ul>

        <ul>
          <li>Aplicação sem cheiro</li>
          <li>Fosco, Brilhoso, Acetinado</li>
        </ul>

        <ul>
          <li>Proteção de móveis</li>
          <li>Secagem rápida para quem precisa mudar</li>
        </ul>
      </div>
      <Link href="#contact" className="see-more">
        Ver mais
      </Link>
      <div className="service-item-container-one">
        {services.primary.map(item => (
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
        {services.secondary.map(item => (
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
