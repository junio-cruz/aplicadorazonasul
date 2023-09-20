import * as React from 'react';

import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface ExamEmailProps {
  name: string;
  email: string;
  createdAt: string;
  phoneNumber?: string;
  description?: string;
  city?: string;
  offersAndNews?: boolean;
}

export default function EmailTemplate({
  name,
  email,
  phoneNumber,
  description,
  city,
  offersAndNews,
  createdAt,
}: ExamEmailProps) {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

  return (
    <Html>
      <Head />
      <Preview>Solitação de serviço!</Preview>
      <Body
        style={{
          padding: '0',
          margin: '0 auto',
          maxWidth: '800px',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
        }}
      >
        <Container
          align="center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '600px',
          }}
        >
          <Row
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Section
              align="center"
              style={{
                margin: '0 50%',
              }}
            >
              <Column
                align="right"
                style={{
                  padding: '0 10px 0 10px',
                }}
              >
                <Img
                  src={`${baseUrl}/static/icon.jpg`}
                  width={50}
                  height={50}
                  alt="Aplicadora Zona Sul"
                />{' '}
              </Column>
              <Column align="left">
                <Text>
                  <span>Aplicadora Zona Sul</span>
                </Text>{' '}
              </Column>
            </Section>
          </Row>
          <Section
            align="center"
            style={{
              backgroundColor: '#E2E2E2',
              borderRadius: '15px',
              padding: '30px 30px 30px 30px',
            }}
          >
            <Section
              align="center"
              style={{
                textAlign: 'center',
                padding: '0',
              }}
            >
              <Text>
                <h1>O cliente {name} solicitou um contato!</h1>
              </Text>
            </Section>
            <Section
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text
                style={{
                  fontSize: '14px',
                  fontWeight: 'normal',
                  color: '#595959',
                }}
              >
                <span>Email: {email}</span>
              </Text>
              <Text
                style={{
                  fontSize: '14px',
                  fontWeight: 'normal',
                  color: '#595959',
                }}
              >
                <span>Telefone: {phoneNumber || 'Não informado!'}</span>
              </Text>
              <Text
                style={{
                  fontSize: '14px',
                  fontWeight: 'normal',
                  color: '#595959',
                }}
              >
                <span>Cidade: {city || 'Não informado!'}</span>
              </Text>
              <Text
                style={{
                  fontSize: '14px',
                  fontWeight: 'normal',
                  color: '#595959',
                }}
              >
                <span>Data da solicitação {createdAt}!</span>
              </Text>
              <Text
                style={{
                  fontSize: '14px',
                  fontWeight: 'normal',
                  color: '#595959',
                }}
              >
                <span>Notificações: {offersAndNews ? 'Sim' : 'Não'}!</span>
              </Text>
              <Text
                style={{
                  fontSize: '14px',
                  fontWeight: 'normal',
                  color: '#595959',
                }}
              >
                <span className="font-semibold text-text-font text-xl">
                  Detalhes:{' '}
                  <span className="font-light text-email-text text-lg">
                    {description || 'Não informado!'}
                  </span>
                </span>
              </Text>
            </Section>
            <Section
              align="center"
              style={{
                textAlign: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: '12px',
                  fontWeight: 'lighter',
                  color: '#595959',
                }}
              >
                <span className="text-email-text text-sm font-light">
                  Em caso de dúvida entre em contato com o supervisor pelo{' '}
                  <a
                    href="https://api.whatsapp.com/send?phone=21970913515"
                    target="_blank"
                    className="font-semibold text-text-font underline"
                    rel="noreferrer"
                  >
                    whatsapp
                  </a>
                  ou fale através do número (21)97303-3016.
                </span>
              </Text>
            </Section>
          </Section>
          <Section
            align="center"
            style={{
              padding: '20px 20px 20px 20px',
              textAlign: 'center',
            }}
          >
            <Text
              style={{
                fontSize: '14px',
                fontWeight: 'normal',
                color: '#A7A7A7',
                margin: '0 auto',
              }}
            >
              <span>2023© Aplicadora Zona Sul</span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
