import { Overview } from "../api/type";
import TableOverview from "../TableOverview";
import Paragraphs from "./Paragraphs";
import ShowImages from "./ShowImages";

interface PostItemProps {
  post: Overview;
}
const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="border border-gray-300 px-6 py-2 bg-white shadow-md font-bold uppercase text-center text-2xl">
          {post.title}
        </div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div>
        {post.description.map((desc, index) => {
          return (
            <div key={index}>
              <p className="text-gray-700 text-left mt-4 whitespace-pre-line">
                {desc.paragraph}
              </p>
              <Paragraphs paragraph={desc.paragraph} />
              {desc.images && desc.images.length > 0 ? (
                <div className="mt-6">
                  <ShowImages images={desc.images} />
                  {/* <TableCustom /> */}
                  <div className="flex flex-col md:flex-row gap-6 py-6">
                    {post.type === "overview" && <TableOverview />}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostItem;
