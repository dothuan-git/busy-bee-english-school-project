import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone?.trim() || !/^[0-9]{9,11}$/.test(phone.trim())) {
      return NextResponse.json(
        { error: 'Số điện thoại không hợp lệ.' },
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
      subject: `[Đăng ký] Số điện thoại mới: ${phone}`,
      html: `
        <h2>Đăng ký tư vấn mới</h2>
        <table style="border-collapse:collapse;width:100%;max-width:400px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Số điện thoại</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone}</td>
          </tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:14px;">Khách hàng đăng ký từ mục "Bạn còn thắc mắc gì không?" trên website.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe email error:', error);
    return NextResponse.json(
      { error: 'Gửi thất bại. Vui lòng thử lại sau.' },
      { status: 500 },
    );
  }
}
