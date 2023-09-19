import './styles.scss';
import Image from 'next/image';
import Logo from '../../public/icon.jpg';
import Link from 'next/link';

export default async function Header() {
  return (
    <header className="header">
      <Image priority src={Logo} alt="Aplicador Zona Sul" width={100} height={80} />
      <nav>
        <div>
          <Link href="/#clinic">
            Início
          </Link>
          <Link href="/#about">
            Sobre nós
          </Link>
        </div>
        <div>
          <Link href="/#services">
            Serviços
          </Link>
          <Link href="/#contact">
            Contato
          </Link>
        </div>
      </nav>
      <div className="whatsapp">
        <span>(21)</span>
        <Link
          href="https://api.whatsapp.com/send?phone=21970913515"
          target="_blank"
          rel="noreferrer"
        >
          97091-3515
        </Link>
        <Image priority src="/whatsapp-icon.png" alt="Whatsapp" width={25} height={25} />
      </div>
    </header>
  );
}

