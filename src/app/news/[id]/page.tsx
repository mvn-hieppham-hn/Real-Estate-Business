import { mockNewsData } from '@/app/api/mock-news'
import { QueryParamsProps } from '@/app/api/type'
import DetailNews from '@/app/components/DetailNews'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateMetadata({
  params,
}: QueryParamsProps): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id } = params as any
  const news = mockNewsData.find((news) => String(news.id) === id)

  if (!news) {
    return {
      title: 'Không tìm thấy dự án',
      description: 'Trang dự án bạn đang tìm không tồn tại.',
    }
  }

  return {
    title: news.title || 'Tin tức',
    description: news.contents[0].content || 'Thông tin tin tức',
  }
}

const NewsDetail = async ({ params }: QueryParamsProps) => {
  const { id } = await params

  const news = mockNewsData.find((news) => String(news.id) === id)
  if (!news) return notFound()

  return (
    <div>
      <DetailNews news={news} />
    </div>
  )
}

export default NewsDetail
