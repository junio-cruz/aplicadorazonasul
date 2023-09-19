import './styles.scss';
import React from 'react';

interface AboutItemProps {
  image: string
  description: string;
}

export default async function AboutItem({ image, description }: AboutItemProps) {
  return (
    <div className="about-item">
      <img src={image} alt="Sobre nos" />
      <p>{description}</p>
    </div>
  );
}

