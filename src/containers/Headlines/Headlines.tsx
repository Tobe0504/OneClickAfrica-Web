import HeaderText from "@/components/HeaderText/HeaderText";
import Loader from "@/components/Loader/Loader";
import NewsCard from "@/components/NewsCard/NewsCard";
import { newsType } from "@/utilities/types";
import classes from "./Headlines.module.css";

type HeadlinesTypes = {
  news: newsType;
  loading: boolean;
};

const Headlines = ({ news, loading }: HeadlinesTypes) => {
  return (
    <section className={classes.container}>
      <HeaderText>Headlines</HeaderText>

      <div className={classes.newsContainer}>
        {loading ? (
          <Loader />
        ) : (
          news.news?.slice(0, 3).map((data) => {
            return <NewsCard key={data?._id} data={data} />;
          })
        )}
      </div>
    </section>
  );
};

export default Headlines;
