import { mockNewsData } from "../api/mock-news";
import ItemNews from "./ItemNews";

const News = () => {
  return (
    <div>
      {mockNewsData.map((news, index) => {
        return <ItemNews key={index} news={news} />;
      })}
    </div>
  );
};
export default News;
