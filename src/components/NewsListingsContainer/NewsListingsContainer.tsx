import { newsType } from "@/utilities/types";
import Button from "../Button/Button";
import NewsItemContainer from "../NewsItemContainer/NewsItemContainer";
import classes from "./NewsListingsContainer.module.css";

type NewsListingsContainerType = {
  header: string;
  news: newsType[];
  route?: string;
  hasBorder?: boolean;
};

const NewsListingsContainer = ({
  header,
  news,
  route,
  hasBorder,
}: NewsListingsContainerType) => {
  return (
    <section
      className={`${classes.container} ${
        hasBorder ? classes.topBorder : undefined
      }`}
    >
      <h3>{header}</h3>

      <ul className={classes.newsListingsContainer}>
        {news.map((news, i) => {
          return <NewsItemContainer data={news} key={i} />;
        })}
      </ul>

      {route && <Button>READ MORE</Button>}
    </section>
  );
};

export default NewsListingsContainer;
