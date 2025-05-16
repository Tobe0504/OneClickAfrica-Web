"use client";

import classes from "./HomePage.module.css";
import Layout from "@/layouts/Layout/Layout";
import TrendingMovies from "../TrendingMovies/TrendingMovies";
import Headlines from "../Headlines/Headlines";
import InsideAfrica from "../InsideAfrica/InsideAfrica";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import { routes } from "@/utilities/routes";
import {
  useAfricanEconomyNews,
  useDiasporaNews,
  useEntertainmentNews,
  useGeneralPoliticsNews,
  useGossipNews,
  useLatestNews,
  useNaijaNews,
  useSportNews,
} from "@/hooks/useNews";

const HomePage = () => {
  // Requests
  const { isLoading: latestNewsIsLoading, data: latestNews } = useLatestNews({
    page: 1,
  });
  const { isLoading: entertainmentNewsisLoading, data: entertainmentNews } =
    useEntertainmentNews({ page: 1 });
  const { isLoading: naijaNewsIsLoading, data: naijaNews } = useNaijaNews({
    page: 1,
  });
  const { isLoading: sportNewsIsLoading, data: sportNews } = useSportNews({
    page: 1,
  });
  const { isLoading: generalPoliticsIsLoading, data: generalPoliticsNews } =
    useGeneralPoliticsNews();
  const { isLoading: gossipIsLoading, data: gossipNews } = useGossipNews();
  const { isLoading: diasporaNewsisLoading, data: diasporaNews } =
    useDiasporaNews({ page: 1 });
  const { isLoading: africanEconomyNewsIsLoading, data: africanEconomyNews } =
    useAfricanEconomyNews();

  return (
    <Layout>
      <TrendingMovies />
      <Headlines news={latestNews?.data} loading={latestNewsIsLoading} />
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
        news={sportNews?.data}
        route={routes.SPORTS}
        hasBorder
        loading={sportNewsIsLoading}
      />
      <NewsListingsContainer
        header="GENERAL POLITICS"
        news={generalPoliticsNews?.data}
        route={routes.POLITICS}
        hasBorder
        loading={generalPoliticsIsLoading}
      />
      <NewsListingsContainer
        header="GOSSIP"
        news={gossipNews?.data}
        route={routes.ENTERTAINMENT}
        hasBorder
        loading={gossipIsLoading}
      />
      <NewsListingsContainer
        header="DIASPORA"
        news={diasporaNews?.data}
        route={routes.DIASPORA}
        hasBorder
        loading={diasporaNewsisLoading}
      />
      <NewsListingsContainer
        header="AFRICAN ECONOMY"
        news={africanEconomyNews?.data}
        route={routes.ECONOMY}
        hasBorder
        loading={africanEconomyNewsIsLoading}
      />
    </Layout>
  );
};

export default HomePage;
