'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Mail, Clock, Phone, Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownRef])

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolled ? 'bg-sub-primary shadow-lg' : 'bg-sub-primary'
      }`}
    >
      {/* Top Bar */}
      {!scrolled && (
        <div className="bg-primary ">
          <div className="text-white text-xs font-semibold py-2 px-4 flex justify-between items-center max-w-6xl mx-auto">
            <span>DỰ ÁN JADE LAKE RESIDENCE - 09.1111.3319</span>
            <div className="hidden md:flex items-center gap-4 font-thin">
              <div className="flex items-center gap-1 pr-4 border-r border-gray-300">
                <Mail size={14} /> <span>LIÊN HỆ</span>
              </div>
              <div className="flex items-center gap-1  pr-4 border-r border-gray-300">
                <Clock size={14} /> <span>08:00 - 17:00</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={14} /> <span>0911113319</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Nav */}
      <div className="h- max-w-6xl mx-auto px-4 flex items-center justify-start px-4 py-2">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white border border-white p-2 rounded"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={16} />
          </button>
          <div className="hidden md:block w-[200px]">
            <Image
              src="/phuoc-duyen.png"
              alt="Logo"
              width={45}
              height={45}
              priority
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-xs text-white font-semibold">
          <Link href="/" className="hover:underline">
            TRANG CHỦ
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 hover:underline "
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              MẶT BẰNG <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md p-2 w-60">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Thiết kế Biệt Thự Jade Lake Residence - Tây Thăng Long
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Thiết kế Shophouse Jade Lake Residence 160m2 - Tây Thăng Long
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="hover:underline">
            TIN TỨC
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 flex z-50">
          <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col">
            <button
              className="self-end text-black"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-4 mt-6 text-gray-700 text-sm font-medium">
              <Link
                href="#"
                className="px-4 py-2 rounded hover:bg-gray-200 no-underline transition"
                onClick={() => setMenuOpen(false)}
              >
                TRANG CHỦ
              </Link>
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-200 transition"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  MẶT BẰNG <ChevronDown size={16} />
                </button>

                {dropdownOpen && (
                  <div className="mt-2 bg-white text-gray-700 shadow-lg rounded-md p-2">
                    <Link
                      href="#"
                      className="block px-4 py-2 rounded hover:bg-gray-200 transition"
                    >
                      Thiết kế Biệt Thự Jade Lake Residence - Tây Thăng Long
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 rounded hover:bg-gray-200 transition"
                    >
                      Thiết kế Shophouse Jade Lake Residence 160m2 - Tây Thăng
                      Long
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="#"
                className="px-4 py-2 rounded hover:bg-gray-200 no-underline transition"
                onClick={() => setMenuOpen(false)}
              >
                TIN TỨC
              </Link>
            </nav>
          </div>
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMenuOpen(false)}
          ></div>
        </div>
      )}
    </header>
  )
}
