"use client";

import classes from "./HomePage.module.css";
import Layout from "@/layouts/Layout/Layout";
import TrendingMovies from "../TrendingMovies/TrendingMovies";
import Headlines from "../Headlines/Headlines";
import InsideAfrica from "../InsideAfrica/InsideAfrica";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import { dummyNews } from "@/utilities/data";
import { routes } from "@/utilities/routes";
import {
  useEntertainmentNews,
  useLatestNews,
  useNaijaNews,
} from "@/hooks/useNews";

const HomePage = () => {
  // Requests
  const { isLoading: latestNewsIsLoading, data: latestNews } = useLatestNews();
  const { isLoading: entertainmentNewsisLoading, data: entertainmentNews } =
    useEntertainmentNews();
  const { isLoading: naijaNewsIsLoading, data: naijaNews } = useNaijaNews();

  return (
    <Layout>
      <TrendingMovies />
      <Headlines />
      <InsideAfrica />

      <NewsListingsContainer
        header="Latest News"
        news={latestNews?.data}
        route={routes.LATEST_NEWS}
        loading={latestNewsIsLoading}
      />

      <NewsListingsContainer
        header="ENTERTAINMENT"
        news={entertainmentNews?.data}
        route={routes.ENTERTAINMENT}
        hasBorder
        loading={entertainmentNewsisLoading}
      />

      <NewsListingsContainer
        header="NAIJA"
        news={naijaNews?.data}
        route={routes.NAIJA}
        hasBorder
        loading={naijaNewsIsLoading}
      />
      <NewsListingsContainer
        header="SPORTS"
        news={latestNews?.data}
        route={routes.SPORTS}
        hasBorder
      />
      <NewsListingsContainer
        header="GENERAL POLITICS"
        news={latestNews?.data}
        route={routes.POLITICS}
        hasBorder
      />
      <NewsListingsContainer
        header="GOSSIP"
        news={latestNews?.data}
        route={routes.ENTERTAINMENT}
        hasBorder
      />
      <NewsListingsContainer
        header="DIASPORA"
        news={latestNews?.data}
        route={routes.DIASPORA}
        hasBorder
      />
      <NewsListingsContainer
        header="AFRICAN ECONOMY"
        news={latestNews?.data}
        route={routes.ECONOMY}
        hasBorder
      />
    </Layout>
  );
};

export default HomePage;
