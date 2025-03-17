import { postListMockApi } from './api/mock-post'
import PostItem from './components/PostItem'

import Banner from './components/Banner'
import ImageSlider from './components/ImageSlider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trang chủ | Công ty ABC',
  description: 'Trang web giới thiệu các dự án bất động sản mới nhất.',
}

export default function Home() {
  return (
    <div>
      <Banner />
      {postListMockApi.map((post, index) => {
        return <PostItem key={index} post={post} />
      })}
      <ImageSlider />
    </div>
  )
}
