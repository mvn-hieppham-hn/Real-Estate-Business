import React from "react";
import { NewsData } from "../api/type";

import { getNewsType } from "../constants/news.constants";
import { extractDayMonth } from "../constants/new.helper";
import Paragraphs from "./Paragraphs";
import SubContact from "./SubContact";

interface DetailNewsProps {
  news: NewsData;
}
const DetailNews = ({ news }: DetailNewsProps) => {
  const isHaveImage = news.contents && news.contents[0].image;

  // Ví dụ sử dụng
  const dateStr = "21 Tháng 2, 2025";
  const result = extractDayMonth(dateStr);
  console.log(result); // { day: 21, month: 2 }

  return (
    <div className="bg-white px-4 pt-8  rounded-lg max-w-6xl mx-auto ">
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
        {news.contents.map((content) => {
          return isHaveImage ? (
            <div>
              <img
                src={content.image}
                alt={news.title}
                className="rounded-lg w-full object-cover"
              />
              <Paragraphs paragraph={content.content} />
            </div>
          ) : (
            <Paragraphs paragraph={content.content} />
          );
        })}
      </div>
      <SubContact />
      <p className="text-gray-500 text-sm mt-4 border-t border-b-2 border-gray-300 py-2 text-center">
        Mục nhập này đã được đăng trong{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Tin Tức
        </a>{" "}
        và được gắn thẻ{" "}
        <a href="#" className="text-blue-500 hover:underline">
          vlasta thủy nguyên
        </a>
        .
      </p>
    </div>
  );
};

export default DetailNews;
