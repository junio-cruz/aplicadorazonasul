import React from 'react';

import '@/styles/globals.scss';

import Head from 'next/head';
import { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';

import { Toaster } from 'react-hot-toast';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: '400' });

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
      <body className={barlow.className}>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
