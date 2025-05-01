import HeaderText from "@/components/HeaderText/HeaderText";
import NewsVideo from "@/components/NewsVideo/NewsVideo";
import classes from "./TrendingMovies.module.css";

const TrendingMovies = () => {
  return (
    <section className={classes.container}>
      <HeaderText>Trending news</HeaderText>

      <div className={classes.liveVideos}>
        <NewsVideo />
        <NewsVideo />
        <NewsVideo />
      </div>
    </section>
  );
};

export default TrendingMovies;
