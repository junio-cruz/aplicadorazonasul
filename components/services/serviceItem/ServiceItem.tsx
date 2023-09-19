import './styles.scss';
import React from 'react';
import Link from 'next/link';

interface ServiceItemProps {
  image: string;
  description: string;
  link: string;
  price?: number;
}

export default async function ServiceItem({
  image,
  description,
  link,
  price,
}: ServiceItemProps) {
  const priceItem = price
    ? `A partir de R$ ${price} M²`
    : 'Valor sob avaliação';
  return (
    <div className="service-item">
      <div className="image">
        <img src={image} alt="Sobre nos" />
        <Link href="/#contact" />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <span>{priceItem}</span>
    </div>
  );
}
