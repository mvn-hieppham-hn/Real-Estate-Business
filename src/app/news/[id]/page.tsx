/* eslint-disable @next/next/no-img-element */
import ContactInfo from '@/app/components/ContactInfo'
import { notFound } from 'next/navigation'
import React from 'react'

// Giả lập API lấy dữ liệu bài viết
type NewsData = {
  title: string
  type: string
  date: string
  author: string
  contents: {
    image: string
    content: string
  }[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getNewsDetail = async (slug: string) => {
  const mockData: NewsData = {
    title: 'Vlasta Thủy Nguyên Hành Trình Tới Cuộc Sống Thịnh Vượng Và An Lành',
    date: '21 Tháng 2, 2025',
    author: 'Admin',
    contents: [
      {
        image:
          'https://jadelaketaythanglong.com/wp-content/uploads/2025/02/SH1-mat-chinh-1-1382x800.jpg.webp',
        content:
          'Trong lòng thành phố náo nhiệt, nơi mà những tiếng ồn ào của cuộc sống hiện đại dường như không bao giờ dứt, có một nơi mà cuộc sống thịnh vượng và an lành đang chờ đón bạn. Đó chính là Vlasta Thủy Nguyên – một kiệt tác kiến trúc và môi trường sống lý tưởng, nơi mà con người có thể tìm thấy sự cân bằng hoàn hảo giữa hiện đại và thiên nhiên.\n Tọa lạc tại vị trí đắc địa, Vlasta Thủy Nguyên không chỉ mang đến một không gian sống xanh mát, mà còn là biểu tượng của sự phát triển bền vững. Dự án này được thiết kế với tâm huyết và tầm nhìn dài hạn, nhằm tạo ra một cộng đồng dân cư thịnh vượng, nơi mà mỗi cư dân đều có thể tận hưởng cuộc sống đáng mơ ước.',
      },
      {
        image:
          'https://jadelaketaythanglong.com/wp-content/uploads/2025/02/bieu-tuong-vlasta-thuy-nguyen-1131x800.jpg.webp',
        content:
          'Một trong những điểm nhấn nổi bật của.\n Ngoài ra, Vlasta Thủy Nguyên còn chú trọng đến việc bảo vệ môi trường và phát triển bền vững. Các giải pháp kiến trúc xanh được áp dụng một cách triệt để, từ việc sử dụng năng lượng tái tạo đến việc tiết kiệm nước và giảm thiểu khí thải carbon. Với Vlasta Thủy Nguyên, bạn không chỉ đang sống trong một không gian đẹp mắt, mà còn đang góp phần bảo vệ môi trường cho thế hệ tương lai.',
      },
      {
        image:
          'https://jadelaketaythanglong.com/wp-content/uploads/2025/02/001-1263x800.jpg.webp',
        content:
          'Không chỉ dừng lại ở đó, Vlasta Thủy Nguyên còn mang đến một môi trường giáo dục và y tế chất lượng cao. Các trường học và bệnh viện uy tín được tích hợp trong khu vực, giúp cư dân tiết kiệm thời gian di chuyển và yên tâm về sức khỏe cũng như giáo dục của con em mình. Đây chính là nền tảng vững chắc cho một cuộc sống thịnh vượng và an lành.\n Hành trình tới cuộc sống thịnh vượng và an lành tại Vlasta Thuỷ Nguyên không chỉ là câu chuyện về một dự án bất động sản, mà còn là câu chuyện về sự kết nối, sự chia sẻ và sự tận hưởng cuộc sống. Tại đây, mỗi cư dân đều được sống trong một môi trường an lành, nơi mà mọi ước mơ đều có thể trở thành hiện thực.\n Hãy đến và khám phá Vlasta Thủy Nguyên, nơi mà cuộc sống thịnh vượng và an lành đang chờ đón bạn. Cùng nhau, chúng ta sẽ xây dựng một cộng đồng vững mạnh, nơi mà mỗi ngày đều là một hành trình tuyệt vời đầy niềm vui và hạnh phúc.\n',
      },
    ],
    type: '',
  }

  return mockData || null
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getNewsDetail(slug)

  if (!post) return notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        {post.title}
      </h2>
      <p className="text-gray-400 text-end mt-2">
        Đã đăng trên {post.date} bởi {post.author}
      </p>

      {post.contents.map((content, index) => {
        return (
          <div key={`${index}`}>
            <div className="relative w-full max-w-6xl mx-auto mt-6">
              <img
                src={content.image}
                alt=""
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute top-2 left-2 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold">
                21 <br /> Th2
              </div>
            </div>

            <div className="mt-6">
              {content.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  <p className="text-lg leading-relaxed">{line}</p>
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        )
      })}
      <ContactInfo />
    </div>
  )
}
