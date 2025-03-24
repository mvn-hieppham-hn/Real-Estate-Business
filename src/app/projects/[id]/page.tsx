import { projectListMockApi } from "@/app/api/mock-project";
import { QueryParamsProps } from "@/app/api/type";
import Banner from "@/app/components/Banner";
import PostItem from "@/app/components/PostItem";

const ItemProject = async ({ params }: QueryParamsProps) => {
  const { id } = await params;

  return (
    <div>
      <Banner imageUrl="/images/Banner-JLR-Pr-1.png" />
      {projectListMockApi.map((project, index) => {
        return <PostItem key={index} post={project} />;
      })}
    </div>
  );
};
export default ItemProject;
