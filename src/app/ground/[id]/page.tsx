import { groundListMockApi } from "@/app/api/mock-ground";
import Banner from "@/app/components/Banner";
import PostItem from "@/app/components/PostItem";

export default function Home() {
  return (
    <div>
      <Banner imageUrl="https://jadelaketaythanglong.com/wp-content/uploads/2024/08/shophouse-duong-60m-jade-lake-tay-thang-long-1400x788.webp" />
      {groundListMockApi.map((post, index) => {
        return <PostItem key={index} post={post} />;
      })}
    </div>
  );
}
