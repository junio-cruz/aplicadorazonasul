import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

import ResultEmail from '@/components/email/templates/ResultEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const {
    name,
    email,
    phoneNumber,
    description,
    city,
    offersAndNews,
    createdAt,
    filename,
    file,
  } = await req.json();

  const buffer = file
    ? Buffer.from(file.replace(/^data:application\/\w+;base64,/, ''), 'base64')
    : undefined;

  const attachments =
    file && filename
      ? [
          {
            filename,
            content: buffer,
          },
        ]
      : undefined;

  const emailToSend = 'aplicadorazonasulrj@gmail.com';
  const teste = 'junio.souza_cruz@outlook.com';

  const response = await resend.emails.send({
    from: 'Aplicadora Zona Sul <onboarding@resend.dev>',
    to: ['aplicadorazonasulrj@gmail.com', teste],
    subject: 'Solicitação de Serviço!',
    react: ResultEmail({
      name,
      email,
      phoneNumber,
      description,
      city,
      offersAndNews,
      createdAt,
    }),
    attachments,
  });
  return NextResponse.json(response);
}
