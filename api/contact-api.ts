import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("API Key present:", !!process.env.RESEND_API_KEY);
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'amiriqbalkhan001@gmail.com',
      subject: subject || 'New Contact Form Submission',
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });
    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: error.message || 'Failed to send email' });
    }
    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
} 