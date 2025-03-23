/* eslint-disable @next/next/no-img-element */
import { mockNewsData } from "@/app/api/mock-news";
import { QueryParamsProps } from "@/app/api/type";
import DetailNews from "@/app/components/DetailNews";
import { notFound } from "next/navigation";
import React from "react";

export default async function NewsDetail({ params }: QueryParamsProps) {
  const news = mockNewsData.find((news) => String(news.id) === params.id);
  if (!news) return notFound();

  return (
    <div>
      <DetailNews news={news} />;
    </div>
    // <div className="max-w-6xl mx-auto px-4 py-10 mt-20">
    //   <h2 className="text-2xl md:text-3xl font-bold text-center">
    //     {post.title}
    //   </h2>
    //   <p className="text-gray-400 text-end mt-2">
    //     Đã đăng trên {post.date} bởi {post.author}
    //   </p>

    //   {post.contents.map((content, index) => {
    //     return (
    //       <div key={`${index}`}>
    //         <div className="relative w-full max-w-6xl mx-auto mt-6">
    //           <img
    //             src={content.image}
    //             alt=""
    //             className="w-full rounded-lg shadow-lg"
    //           />
    //           <div className="absolute top-2 left-2 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold">
    //             21 <br /> Th2
    //           </div>
    //         </div>

    //         <div className="mt-6">
    //           {content.content.split("\n").map((line, index) => (
    //             <React.Fragment key={index}>
    //               <p className="text-lg leading-relaxed">{line}</p>
    //               <br />
    //             </React.Fragment>
    //           ))}
    //         </div>
    //       </div>
    //     );
    //   })}
    //   <ContactInfo />
    // </div>
  );
}
