"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src="https://jadelaketaythanglong.com/wp-content/uploads/2024/08/shophouse-duong-60m-jade-lake-tay-thang-long-1400x788.webp"
        alt="Jade Lake Residence"
        layout="fill"
        objectFit="cover"
      />
      {/* Nền đen giữ nguyên */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        {/* Chỉ phần chữ có hiệu ứng xoay */}
        <motion.div
          className="text-white text-center"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <h1 className="text-6xl font-semibold">JADE LAKE RESIDENCE</h1>
          <p className="text-xl italic border-t-2 border-blue-500 mt-2 pt-2 font-parisienne">
            Sống Tinh Hoa - Sống Thịnh Vượng
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
