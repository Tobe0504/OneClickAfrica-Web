import classes from "./HomePage.module.css";
import Layout from "@/layouts/Layout/Layout";
import TrendingMovies from "../TrendingMovies/TrendingMovies";
import Headlines from "../Headlines/Headlines";
import InsideAfrica from "../InsideAfrica/InsideAfrica";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import { dummyNews } from "@/utilities/data";
import { routes } from "@/utilities/routes";

const HomePage = () => {
  return (
    <Layout>
      <TrendingMovies />
      <Headlines />
      <InsideAfrica />
      <NewsListingsContainer
        header="Latest News"
        news={dummyNews}
        route={routes.LATEST_NEWS}
      />
      <NewsListingsContainer
        header="ENTERTAINMENT"
        news={dummyNews}
        route={routes.ENTERTAINMENT}
        hasBorder
      />
      <NewsListingsContainer
        header="NAIJA"
        news={dummyNews}
        route={routes.NAIJA}
        hasBorder
      />
      <NewsListingsContainer
        header="SPORTS"
        news={dummyNews}
        route={routes.SPORTS}
        hasBorder
      />
      <NewsListingsContainer
        header="GENERAL POLITICS"
        news={dummyNews}
        route={routes.POLITICS}
        hasBorder
      />
      <NewsListingsContainer
        header="GOSSIP"
        news={dummyNews}
        route={routes.ENTERTAINMENT}
        hasBorder
      />
      <NewsListingsContainer
        header="DIASPORA"
        news={dummyNews}
        route={routes.DIASPORA}
        hasBorder
      />
      <NewsListingsContainer
        header="AFRICAN ECONOMY"
        news={dummyNews}
        route={routes.ECONOMY}
        hasBorder
      />
    </Layout>
  );
};

export default HomePage;
