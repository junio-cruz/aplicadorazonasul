import './styles.scss';
import Image from 'next/image';
import Link from 'next/link';
import { socialMedias } from '@/utils/data';

export default async function Footer() {
  return (
    <footer className="footer">
      <h3>Aplicadora Zona Sul</h3>
      <div className="content">
        <div className="map">
          <span>Atuamos em todo o estado do Rio!</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1893226.2537941171!2d-44.2428861080106!3d-22.06078076063055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1695140444481!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="infos">
          <div className="contact-us">
            <h4>Fale conosco</h4>
            <span>Whatsapp 24h - (21)97303-3016</span>
            <span>aplicadorazonasulrj@gmail.com</span>
          </div>
          <div className="policy">
            <h4>Política</h4>
            <span>Políticas de privacidade</span>
          </div>
          <div className="about-store">
            <h4>Sobre</h4>
            <span>Sobre a loja</span>
          </div>
          <div className="social-media">
            {socialMedias.map(media => (
              <Link key={media.id} href={media.link}>
                <Image
                  priority
                  src={media.icon}
                  alt={media.platform}
                  width={32}
                  height={32}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>
          ©2023 <span>Aplicadora Zona Sul</span>
        </span>
        <span>
          Desenvolvido por <span className="buzzpytech">BuzzPyTech</span>
        </span>
      </div>
    </footer>
  );
}
