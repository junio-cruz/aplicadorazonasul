'use client';

import './styles.scss';
import React, { useCallback, useState } from 'react';
import { maskPhoneNumber } from '@/utils/masks';

import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { dateFnsFormat } from '@/utils/dateFormatter';

type SendEmailInput = {
  name: string;
  email: string;
  createdAt: string;
  offersAndNews: boolean;
  phoneNumber?: string;
  description?: string;
  city?: string;
  filename?: string;
  file?: string;
};

async function sendEmail(input: SendEmailInput): Promise<Response> {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  };
  return await fetch('/api/email', request);
}

export default function Contact() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [file, setFile] = useState<File>();

  const handleChangePhoneNumber = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>, value?: string) => {
      let phoneNumberConverted: string = '';
      if (e?.currentTarget?.value && e?.currentTarget?.value.length > 0) {
        phoneNumberConverted = maskPhoneNumber(
          e?.currentTarget?.value || (value as string),
        );
      }
      setPhoneNumber(phoneNumberConverted);
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const sendEmailInput: SendEmailInput = {
        name: e.currentTarget.clientname.value,
        email: e.currentTarget.email.value,
        description: e.currentTarget.description.value,
        city: e.currentTarget.city.value,
        phoneNumber: e.currentTarget.phoneNumber.value,
        offersAndNews: e.currentTarget.offersAndNews.value === 'on',
        createdAt: dateFnsFormat({
          date: new Date(),
        }),
      };

      try {
        await sendEmail({
          email: sendEmailInput.email,
          name: sendEmailInput.name || 'Cliente',
          description: sendEmailInput.description,
          phoneNumber: sendEmailInput.phoneNumber,
          city: sendEmailInput.city,
          offersAndNews: sendEmailInput.offersAndNews,
          createdAt: sendEmailInput.createdAt,
        });
        toast.success('Resultado enviado com Sucesso!');
      } catch (e) {
        toast.error('Error ao enviar o !');
      }
    },
    [],
  );

  return (
    <section id="contact" className="contact">
      <div className="title-container">
        <div className="line-left" />
        <h2>Contato</h2>
        <div className="line-right" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="clientname"
          type="text"
          required
          placeholder="Nome"
          onInvalid={e =>
            (e.target as HTMLInputElement).setCustomValidity('Digite seu nome!')
          }
          onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          onInvalid={e =>
            (e.target as HTMLInputElement).setCustomValidity(
              'Digite seu Email @!',
            )
          }
          onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
        />
        <div className="phoneNumber-and-city">
          <input
            name="phoneNumber"
            type="text"
            placeholder="Telefone"
            value={phoneNumber}
            onChange={e => handleChangePhoneNumber(e)}
          />
          <input name="city" type="text" placeholder="Cidade" />
        </div>
        <div className="offers-and-news">
          <input
            id="offers-and-news"
            name="offersAndNews"
            type="checkbox"
            className="offers-and-news-checkbox"
          />
          <label htmlFor="offers-and-news">
            Quero receber ofertas e novidades por email
          </label>
        </div>
        <textarea
          name="description"
          placeholder="Conte-nos em que podemos tirar sua dúvida?"
        />
        <button type="submit">Enviar</button>
      </form>
      <div className="whatsapp-message">
        <h3>Quer agendar uma visita conosco?</h3>
        <p>
          Fale diretamente com a gente pelo <br /> Whatsapp
        </p>
        <Link
          href="https://api.whatsapp.com/send?phone=21970913515"
          target="_blank"
          rel="noreferrer"
        >
          <span>Mandar mensagem</span>
          <Image
            priority
            src="/whatsapp-icon.png"
            alt="Whatsapp"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </section>
  );
}
