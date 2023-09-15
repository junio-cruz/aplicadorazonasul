import React from 'react';

import './styles.module.scss';
import Image from 'next/image';
import Logo from '../../public/icon.jpg';

export default async function Header() {
  return (
    <header className="header">
      <span>Aplicadora Zona Sul</span>
      <Image src={Logo} alt="Aplicador Zona Sul" width={50} height={50} />
    </header>
  );
}
