"use client";

import './styles.scss';
import React, {useCallback, useState} from 'react';
import { maskPhoneNumber } from '@/utils/masks';

import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [phoneNumber, setPhoneNumber] = useState('');

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("HANDLE SUBMIT", e.currentTarget);
  };

  return (
    <section id="contact" className="contact">
      <div className="title-container">
        <div className="line-left" />
        <h2>Contato</h2>
        <div className="line-right" />
      </div>
      <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            required
            placeholder="Nome"
            onInvalid={e =>
              (e.target as HTMLInputElement).setCustomValidity(
                'Digite seu nome!',
              )
            }
            onInput={e =>
              (e.target as HTMLInputElement).setCustomValidity('')
            }
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
            onInput={e =>
              (e.target as HTMLInputElement).setCustomValidity('')
            }
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
            <input id="offers-and-news" name="offers-and-news" type="checkbox" className="offers-and-news-checkbox" />
            <label htmlFor="offers-and-news">Quero receber ofertas e novidades por email</label>
          </div>
          <textarea placeholder="Conte-nos em que podemos tirar sua dúvida?" />
          <button type="submit">
            Enviar
          </button>
        </form>
      <div className="whatsapp-message">
        <h3>Quer agendar uma visita conosco?</h3>
        <p>Fale diretamente com a gente pelo <br /> Whatsap</p>
        <Link
          href="https://api.whatsapp.com/send?phone=21970913515"
          target="_blank"
          rel="noreferrer"
        >
          <span>Mandar mensagem</span>
          <Image priority src="/whatsapp-icon.png" alt="Whatsapp" width={25} height={25} />
        </Link>
      </div>
    </section>
  );
}

