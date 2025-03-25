import React from "react";
import { NewsData } from "../api/type";

import { getNewsType } from "../constants/news.constants";
import Paragraphs from "./Paragraphs";
import SubContact from "./SubContact";
import ShowImages from "./ShowImages";

interface DetailNewsProps {
  news: NewsData;
}
const DetailNews = ({ news }: DetailNewsProps) => {
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
        {news.contents.map((content, index) => {
          if (content.imageUrl) {
            return (
              <div key={index}>
                <img
                  src={content.imageUrl}
                  alt={news.title}
                  className="rounded-lg w-full object-cover"
                />
                <Paragraphs paragraph={content.content} />
              </div>
            );
          } else if (content.images) {
            return <ShowImages key={index} images={content.images} />;
          } else {
            return <Paragraphs key={index} paragraph={content.content} />;
          }
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
