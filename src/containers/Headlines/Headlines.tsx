import HeaderText from "@/components/HeaderText/HeaderText";
import NewsCard from "@/components/NewsCard/NewsCard";
import classes from "./Headlines.module.css";

const Headlines = () => {
  return (
    <section className={classes.container}>
      <HeaderText>Headlines</HeaderText>

      <div className={classes.newsContainer}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default Headlines;
