/* eslint-disable @next/next/no-img-element */
interface ProjectCardProps {
  imageUrl: string
  title: string
}

const ProjectCard = ({ imageUrl, title }: ProjectCardProps) => {
  return (
    <div className="w-full max-w-xs text-center">
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <div className="w-10 h-1 bg-gray-300 mx-auto mt-2"></div>
    </div>
  )
}

export default ProjectCard
