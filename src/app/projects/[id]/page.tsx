import { projectListMockApi } from "@/app/api/mock-project";
import { QueryParamsProps } from "@/app/api/type";
import Banner from "@/app/components/Banner";
import ProjectItem from "./ProjectItem";

const ItemProject = async ({ params }: QueryParamsProps) => {
  const { id } = await params;
  const project = projectListMockApi.find(
    (project) => String(project.id) === id
  );
  if (project)
    return (
      <div>
        <Banner imageUrl="/images/Banner-JLR-Pr-1.png" />
        {project.contents.map((content, index) => {
          return <ProjectItem key={index} content={content} />;
        })}
      </div>
    );
};
export default ItemProject;
