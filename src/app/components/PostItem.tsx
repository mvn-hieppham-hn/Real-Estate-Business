import Image from "next/image";
import { Post } from "../api/type";

interface PostItemProps {
  post: Post;
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
              <p className="text-gray-700 text-center mt-4">{desc.paragraph}</p>
              {desc.images && desc.images.length > 0 ? (
                <div className="mt-6">
                  <Image
                    src={desc.images[0]}
                    alt="Jade Lake Residence"
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-md w-full object-cover"
                  />
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
