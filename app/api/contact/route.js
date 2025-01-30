import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Input validation
const validateInput = (data) => {
  const { name, email, subject, message } = data;
  
  if (!name?.trim()) {
    return 'Please provide your name';
  }
  
  if (!email || !isValidEmail(email)) {
    return 'Please provide a valid email address';
  }
  
  if (!subject?.trim()) {
    return 'Please provide a subject';
  }
  
  if (!message?.trim()) {
    return 'Please provide a message';
  }
  
  return null;
};

export async function POST(req) {
  try {
    // Parse request body
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate input
    const validationError = validateInput(body);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    // Send email
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',  // You can customize this after domain verification
      to: process.env.EMAIL_TO, // Your personal email where you want to receive messages
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Thanks for reaching out! I will get back to you soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}