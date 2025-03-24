import { mockNewsData } from "@/app/api/mock-news";
import { QueryParamsProps } from "@/app/api/type";
import DetailNews from "@/app/components/DetailNews";
import { notFound } from "next/navigation";
import React from "react";

// export default async function CategoryDetail({params}: {params: Promise<{ id: string }>}) {
const NewsDetail = async ({ params }: QueryParamsProps) => {
  const { id } = await params;

  const news = mockNewsData.find((news) => String(news.id) === id);
  if (!news) return notFound();

  return (
    <div>
      <DetailNews news={news} />
    </div>
  );
};

export default NewsDetail;
