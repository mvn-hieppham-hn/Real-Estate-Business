import { Content } from "@/app/api/type";
import Paragraphs from "@/app/components/Paragraphs";
import ShowImages from "@/app/components/ShowImages";

interface ProjectItemProps {
  content: Content;
}
const ProjectItem = ({ content }: ProjectItemProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="border border-gray-300 px-6 py-2 bg-white shadow-md font-bold uppercase text-center text-2xl">
          {content.subtitle}
        </div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div>
        {content.description.map((desc, index) => {
          return (
            <div key={index}>
              <Paragraphs paragraph={desc.paragraph} />
              {desc.images && desc.images.length > 0 ? (
                <div className="mt-6">
                  <ShowImages images={desc.images} />
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

export default ProjectItem;
