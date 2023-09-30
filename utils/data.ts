type SocialMedias = {
  id: number;
  platform: string;
  link: string;
  icon: string;
};

type AboutItemProps = {
  id: number;
  image: string;
  description: string;
};

type Services = { primary: ServiceItem[]; secondary: ServiceItem[] };

type ServiceItem = {
  id: number;
  image: string;
  description: string;
  link: string;
  price?: number;
};

export const socialMedias: SocialMedias[] = [
  {
    id: 1,
    platform: 'Instagram',
    link: 'https://www.instagram.com/aplicadorazonasul/',
    icon: '/footer_icon2.png',
  },
  {
    id: 2,
    platform: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=61551475948353',
    icon: '/footer_icon3.png',
  },
  {
    id: 3,
    platform: 'Twitter',
    link: 'https://twitter.com/AplicadoraZSRio',
    icon: '/footer_icon4.png',
  },
  {
    id: 4,
    platform: 'Linkedin',
    link: 'https://www.linkedin.com/in/aplicadora-zona-sul-788b89291/',
    icon: '/footer_icon5.png',
  },
];

export const aboutItems: AboutItemProps[] = [
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

export const services: Services = {
  primary: [
    {
      id: 1,
      image: '/service1.webp',
      description: '+ de 30 anos trabalhando com revestimento no Rio!',
      link: '',
      price: 10,
    },
    {
      id: 2,
      image: '/service2.jpg',
      description: 'Oferecemos um período de manutenção após o serviço.',
      link: '',
      price: 10,
    },
    {
      id: 3,
      image: '/slide7.jpg',
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
  ],
  secondary: [
    {
      id: 1,
      image: '/slide6.jpg',
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
      image: '/slide5.jpg',
      description: 'Seu imovel impecável com nosso serviço de limpeza!',
      link: '',
    },
    {
      id: 4,
      image: '/slide4.jpg',
      description: 'Seu imovel impecável com nosso serviço de limpeza!',
      link: '',
    },
  ],
};
