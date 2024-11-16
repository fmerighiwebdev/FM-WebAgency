import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function POST(request) {
  const data = await request.json();

  console.log(data);

  if (!data.name || !data.company || !data.email || !data.phone || !data.message) {
    return NextResponse.json({ message: "Tutti i campi obbligatori vanno compilati.", status: "error" });
  }

  if (!data.interest) {
    return NextResponse.json({ message: "Devi selezionare un interesse.", status: "error" });
  }

  if (!data.privacy) {
    return NextResponse.json({ message: "Devi accettare i termini e le condizioni.", status: "error" });
  }

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: "FM Web Agency <francescomerighi61@gmail.com>",
      to: "francescomerighi61@gmail.com",
      subject: "Nuovo messaggio dal sito web",
      html: `
                <p><strong>Nome:</strong> ${data.name}</p>
                <p><strong>Azienda:</strong> ${data.company}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Telefono:</strong> ${data.phone}</p>
                <p><strong>Interesse:</strong> ${data.interest}</p>
                <p><strong>Messaggio:</strong> ${data.message}</p>
            `,
    });

    return NextResponse.json({ message: "Email sent", status: "success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Email not sent", status: "error" });
  }
}
