import './styles.scss';
import Image from 'next/image';
import Logo from '../../public/icon.jpg';
import Link from 'next/link';

export default async function Header() {
  return (
    <header className="header">
      <Image src={Logo} alt="Aplicador Zona Sul" width={100} height={80} />
      <nav>
        <ul>
          <li>
            <Link href="/#clinic">
              Início
            </Link>
          </li>
          <li>
            <Link href="/#services">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/#about">
              Sobre nós
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

