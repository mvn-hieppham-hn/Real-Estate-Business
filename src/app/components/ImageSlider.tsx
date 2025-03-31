'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const images = [
  'https://w.ladicdn.com/s1500x1050/5ebb6be26b12637b2bd43f2e/noi-that-can-ho-the-nelson-29-lang-ha-2-20241118025338-hmuaj.jpg',
  'https://w.ladicdn.com/s400x400/5ebb6be26b12637b2bd43f2e/the-nelson-residence-noi-that-1-20241118025339-ale8r.jpg',
  'https://w.ladicdn.com/s1500x1050/5ebb6be26b12637b2bd43f2e/noi-that-can-ho-the-nelson-29-lang-ha-4-20241118025338-mmmuk.jpg',
  'https://w.ladicdn.com/s400x400/5ebb6be26b12637b2bd43f2e/noi-that-can-ho-the-nelson-29-lang-ha-2-20241118025338-hmuaj.jpg',
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-full object-cover"
          transition={{ duration: 0.5 }}
        />
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={prevSlide}
          aria-label="previous"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={nextSlide}
          aria-label="next"
        >
          <ChevronRight size={30} />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {images.map((img, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={img}
            alt={`thumbnail ${index}`}
            className={`w-20 h-14 object-cover cursor-pointer rounded-lg ${
              currentIndex === index ? 'border-2 border-gray-800' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
