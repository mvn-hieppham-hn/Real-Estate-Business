import { Metadata } from 'next'
import { mockNewsData } from '../api/mock-news'
import ItemNews from '../components/ItemNews'

export const metadata: Metadata = {
  title: 'Tin tức | Phước Duyên',
  description: 'Danh sách tin tin bất động sản Phước Duyên',
}

const News = () => {
  return (
    <div>
      {mockNewsData.map((news, index) => {
        return <ItemNews key={index} news={news} />
      })}
    </div>
  )
}
export default News
