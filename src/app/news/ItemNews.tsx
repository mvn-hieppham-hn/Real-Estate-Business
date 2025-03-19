"use client";
import React from "react";
import { NewsData } from "../api/type";

import { useRouter } from "next/navigation";
import { getNewsType } from "../constants/news.constants";
import { extractDayMonth } from "../constants/new.helper";

interface ItemNewsProps {
  news: NewsData;
}
const ItemNews = ({ news }: ItemNewsProps) => {
  const isHaveImage = news.contents && news.contents[0].image;
  const router = useRouter();

  const handleGoToDetail = () => {
    router.push(`/news/${news.id}`);
  };

  // Ví dụ sử dụng
  const dateStr = "21 Tháng 2, 2025";
  const result = extractDayMonth(dateStr);
  console.log(result); // { day: 21, month: 2 }

  return (
    <div className="bg-white px-4 pt-8 shadow-lg rounded-lg max-w-6xl mx-auto ">
      <p className="text-gray-500 font-semibold uppercase text-sm mb-1 text-center">
        {getNewsType(news.type)}
      </p>
      <h2 className="text-center text-2xl font-semibold my-6 relative">
        {news.title}
        <span className="block w-1/2 border-b border-gray-300 mx-auto p-2"></span>
      </h2>
      <p className="text-right text-gray-400 text-xs mb-4">
        Đã đăng trên {news.date} bởi Admin
      </p>
      <div className="relative">
        {isHaveImage ? (
          <div>
            <div className="absolute top-2 left-2 bg-white shadow-md w-16 h-16 flex flex-col items-center justify-center rounded-md text-center">
              <span className="block text-lg font-bold">{result?.day}</span>
              <span className="block text-sm text-gray-500">{`Th${result?.month}`}</span>
            </div>
            <img
              src={news.contents[0].image}
              alt={news.title}
              className="rounded-lg w-full object-cover"
            />
          </div>
        ) : (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
            {news.contents[0].content}
          </p>
        )}
      </div>
      <button
        className="mt-6 mb-6 block mx-auto bg-white text-gray-700 border border-gray-400 px-3 py-1.5 rounded-md text-sm hover:bg-gray-400"
        onClick={handleGoToDetail}
      >
        TIẾP TỤC ĐỌC →
      </button>
      <p className="text-gray-500 text-sm mt-4 border-t border-b-2 border-gray-300 py-2 text-left">
        <span className="font-semibold">
          Đã đăng trong {getNewsType(news.type)}
        </span>
        <span className="px-2">|</span>
        <span className="font-semibold">Được gắn thẻ {news.title}</span>
      </p>
    </div>
  );
};

export default ItemNews;
