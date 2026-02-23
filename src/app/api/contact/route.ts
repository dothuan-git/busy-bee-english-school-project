import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactBody {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, phone, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin bắt buộc.' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Busy Bee English Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Liên hệ] Tin nhắn mới từ ${name}`,
      html: `
        <h2>Tin nhắn mới từ form liên hệ</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Tên</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Số điện thoại</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone || 'Không cung cấp'}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Tin nhắn</td>
            <td style="padding:8px 12px;white-space:pre-wrap;">${message}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Gửi email thất bại. Vui lòng thử lại sau.' },
      { status: 500 },
    );
  }
}
