import React from 'react';

import type { Metadata } from 'next';
import Head from 'next/head';
import { Rubik } from 'next/font/google';

import Header from '@/components/header/Header';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aplicadora Zona Sul',
  description:
    'A mais de 30 anos com o melhor do revestimento no Rio de Janeiro!',
  icons: {
    icon: {
      url: '/icon.jpg',
      type: 'image/png',
    },
    shortcut: {
      url: '/icon.png',
      type: 'image/jpg',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/jpg" href="../public/icon.jpg" />
      </Head>
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
