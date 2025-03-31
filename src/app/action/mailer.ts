'use server'

import nodemailer from 'nodemailer'

export async function sendQuoteRequest(formData: {
  name: string
  phone: string
  email?: string
  note?: string
}) {
  const { name, phone, email, note } = formData

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Yêu cầu báo giá mới từ website BĐS',
    html: `
      <h3 style="color:red;">Thông tin khách hàng:</h3>
      <p><strong>Họ và tên:</strong> ${name}</p>
      <p><strong>SĐT:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || '(Không có)'}</p>
      <p><strong>Ghi chú:</strong><br />${note || '(Không có)'}</p>
    `,
  })

  return { success: true }
}
