import { postListMockApi } from './api/mock-post'
import PostItem from './components/PostItem'

import Banner from './components/Banner'
import ImageSlider from './components/ImageSlider'

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
