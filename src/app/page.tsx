import PostItem from './components/PostItem'

import Banner from './components/Banner'
import { Metadata } from 'next'
import { overviewMockApi } from './api/mock-overview'

export const metadata: Metadata = {
  title: 'Trang chủ | CTY TNHH BĐS NHÀ ĐẤT PHƯỚC DUYÊN',
  description: 'Trang web giới thiệu các dự án bất động sản mới nhất.',
}

export default function Home() {
  const imageUrl = '/images/Banner-JLR-HomePage.webp'
  const motionTag = (
    <div>
      <h1 className="text-6xl font-semibold">JADE LAKE RESIDENCE</h1>
      <p className="text-xl italic border-t-2 border-blue-500 mt-2 pt-2 font-parisienne">
        Sống Tinh Hoa - Sống Thịnh Vượng
      </p>
    </div>
  )
  return (
    <div>
      <Banner imageUrl={imageUrl} motionTag={motionTag} />
      {overviewMockApi.map((post, index) => {
        return <PostItem key={index} post={post} />
      })}
    </div>
  )
}
