import { projectListMockApi } from "@/app/api/mock-project";
import { QueryParamsProps } from "@/app/api/type";
import Banner from "@/app/components/Banner";
import PostItem from "@/app/components/PostItem";

const ItemProject = ({ params }: QueryParamsProps) => {
  console.log("params.id:", params.id);

  return (
    <div>
      <Banner imageUrl="https://jadelaketaythanglong.com/wp-content/uploads/2024/08/shophouse-duong-60m-jade-lake-tay-thang-long-1400x788.webp" />
      {projectListMockApi.map((project, index) => {
        return <PostItem key={index} post={project} />;
      })}
    </div>
  );
};
export default ItemProject;
