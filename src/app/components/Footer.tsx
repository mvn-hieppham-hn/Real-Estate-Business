'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react'
import { sendQuoteRequest } from '../action/mailer'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    note: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const shakeAnimation = {
    rotate: [0, -10, 10, -3, 3, -1, 1, 0], // Rung lắc yếu dần
    transition: {
      duration: 1, // Tổng thời gian rung
      repeat: Infinity, // Lặp vô hạn (hoặc đổi thành số cố định nếu muốn dừng sau X lần)
      repeatDelay: 0.5, // Đợi 0.5s sau mỗi lần rung
      ease: 'easeInOut',
    },
  }

  const getCurrentDate = () => {
    const now = new Date()
    const day = now.getDate().toString().padStart(2, '0')
    const month = now.getMonth() + 1 // JavaScript months are 0-based
    return { day, month }
  }
  const [currentDate, setCurrentDate] = useState(getCurrentDate())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getCurrentDate())
    }, 60000) // Cập nhật mỗi phút

    return () => clearInterval(interval)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await sendQuoteRequest(formData)
      setSuccess(true)
      setFormData({ name: '', phone: '', email: '', note: '' })
    } catch {
      alert('Gửi không thành công. Vui lòng thử lại!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="relative bg-sub-primary text-white">
      {/* Nội dung Footer */}
      <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Thông tin dự án */}
        <div>
          <h3 className="text-lg font-semibold">DỰ ÁN JADE LAKE RESIDENCE</h3>
          <div className="w-10 h-1 bg-[#ffffff4d] mt-1 mb-3"></div>
          <div className="flex flex-col justify-between gap-4">
            <p className="mt-2 text-sm">
              Địa Chỉ : Lô đất số TT-07, đường Tây Thăng Long, phường Tây Tựu,
              quận Bắc Từ Liêm, Hà Nội
            </p>
            <p className="mt-1 text-sm">SDT / Zalo: 09.1111.3319</p>
            <p className="mt-1 text-sm">
              Website:{' '}
              <a href="#" className="no-underline">
                https://jadelaketaythanglong.com
              </a>
            </p>
          </div>
        </div>

        {/* Bài viết mới */}
        <div>
          <h3 className="text-lg font-semibold">BÀI VIẾT MỚI</h3>
          <div className="w-10 h-1 bg-[#ffffff4d] mt-1 mb-3"></div>
          <ul className="mt-2 text-sm">
            {/* Bài viết 1 */}
            <li className="flex items-center space-x-3 py-2 border-b border-white/30">
              <img
                src="/images/Banner-JLR-HomePage.webp"
                alt="Post 1"
                className="w-12 h-12 object-cover rounded"
              />
              <p className="flex-1">
                Vlasta Thủy Nguyên Hành Trình Tới Cuộc Sống Thịnh Vượng Và An
                Lành
              </p>
            </li>

            {/* Bài viết 2 */}
            <li className="flex items-center space-x-3 py-2 border-b border-white/30">
              <img
                src="/images/Banner-JLR-Pr-1.webp"
                alt="Post 2"
                className="w-12 h-12 object-cover rounded"
              />
              <p className="flex-1">
                Cập nhật tiến độ dự án Jade Lake Residence – Tây Thăng Long
              </p>
            </li>

            {/* Bài viết 3 - Thời gian hiện tại */}
            <li className="flex items-center space-x-3 py-2">
              <div className="w-12 h-12 flex flex-col items-center justify-center border border-white rounded text-white text-center">
                <span className="text-lg font-bold">{currentDate.day}</span>
                <span className="text-xs uppercase">Th{currentDate.month}</span>
              </div>
              <p className="flex-1">Hello world!</p>
            </li>
          </ul>
        </div>

        {/* Form đăng ký */}
        <form className="mt-2 grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên *"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 bg-white text-black rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Số điện thoại *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-2 bg-white text-black rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 bg-white text-black rounded col-span-2"
          />
          <textarea
            name="note"
            placeholder="Ghi chú..."
            value={formData.note}
            onChange={handleChange}
            className="p-2 bg-white text-black rounded col-span-2"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 p-2 rounded col-span-2 text-center"
          >
            {loading ? 'Đang gửi...' : success ? 'Đã gửi ✅' : 'TẢI XUỐNG'}
          </button>
        </form>
      </div>

      {/* 🔥 Icon Zalo & Phone cố định */}
      <div className="fixed bottom-10 left-4 flex flex-col space-y-4">
        {/* 🔵 Zalo Icon */}
        <motion.div
          className="relative flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg cursor-pointer"
          animate={shakeAnimation}
        >
          <a
            href="https://id.zalo.me/account?continue=http%3A%2F%2Fzalo%2Eme%2F0911113319"
            target="_blank"
          >
            <img src="/zalo.png" width={40} />
            <span className="absolute inset-0 rounded-full bg-blue-500 opacity-30 animate-ping"></span>
          </a>
        </motion.div>

        {/* 🔴 Phone Icon */}
        <motion.div
          className="relative flex items-center justify-center w-14 h-14 bg-red-500 rounded-full shadow-lg cursor-pointer"
          animate={shakeAnimation}
        >
          <a href="tel:0911113319">
            <PhoneCall size={25} className="text-white" />
            <span className="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping"></span>
          </a>
        </motion.div>
      </div>

      {/* ⚫ Thanh bar Copyright */}
      <div className="bg-black text-gray-400 text-sm text-center py-4 mt-10">
        Copyright 2025 © Jade Lake Residence
      </div>
    </footer>
  )
}
