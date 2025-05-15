import HeaderText from "@/components/HeaderText/HeaderText";
import Loader from "@/components/Loader/Loader";
import NewsVideo from "@/components/NewsVideo/NewsVideo";
import { useVideoNews } from "@/hooks/useNews";
import { newsItemType } from "@/utilities/types";
import classes from "./TrendingMovies.module.css";

const TrendingMovies = () => {
  // Requests
  const { isLoading, data } = useVideoNews();

  return (
    <section className={classes.container}>
      <HeaderText>Trending news</HeaderText>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.liveVideos}>
          {data?.data?.news?.slice(0, 3)?.map((news: newsItemType) => {
            return <NewsVideo url={news?.video as string} key={news._id} />;
          })}
        </div>
      )}
    </section>
  );
};

export default TrendingMovies;
