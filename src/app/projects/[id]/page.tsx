import { projectListMockApi } from '@/app/api/mock-project'
import { QueryParamsProps } from '@/app/api/type'
import Banner from '@/app/components/Banner'
import ProjectItem from './ProjectItem'
import { Metadata } from 'next'
import { slugify } from '@/app/helpers/helpers'

export async function generateMetadata({
  params,
}: QueryParamsProps): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id } = await params
  const project = projectListMockApi.find(
    (project) => String(project.id) === id
  )

  if (!project) {
    return {
      title: 'Không tìm thấy dự án',
      description: 'Trang dự án bạn đang tìm không tồn tại.',
    }
  }

  return {
    title: project.title || 'Dự án bất động sản',
    description:
      project.contents[0].description[0].paragraph ||
      'Thông tin chi tiết về dự án.',
  }
}

const ItemProject = async ({ params }: QueryParamsProps) => {
  const { id } = await params
  const project = projectListMockApi.find(
    (project) => slugify(project?.title) == id
  )

  if (project)
    return (
      <div>
        <Banner imageUrl="/images/Banner-JLR-Pr-1.webp" />
        {project.contents.map((content, index) => {
          return <ProjectItem key={index} content={content} />
        })}
      </div>
    )
}
export default ItemProject
