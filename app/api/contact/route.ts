import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Clé API non configurée' },
        { status: 500 }
      );
    }

    console.log('Using Resend with API key:', apiKey.substring(0, 10) + '...');

    const resend = new Resend(apiKey);

    const emailData = {
      from: 'onboarding@resend.dev',
      to: 'evamadani@hotmail.fr',
      replyTo: email,
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #333; margin-bottom: 20px;">Nouveau message de contact</h2>
          <div style="background: white; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
          </div>
          <div style="background: white; padding: 15px; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
        </div>
      `,
    };

    console.log('Sending email with data:', { to: emailData.to, subject: emailData.subject });

    const result = await resend.emails.send(emailData);

    console.log('Resend response:', result);

    if (result.error) {
      console.error('Resend error details:', result.error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi', details: JSON.stringify(result.error) },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', result.data?.id);

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès', id: result.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur complète:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: 'Erreur interne', details: errorMessage },
      { status: 500 }
    );
  }
}


