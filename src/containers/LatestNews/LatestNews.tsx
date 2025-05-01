import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Layout from "@/layouts/Layout/Layout";
import { dummyNews } from "@/utilities/data";
import React from "react";

const LatestNews = () => {
  return (
    <Layout>
      <Card>
        <NewsListingsContainer header="LATEST NEWS" news={dummyNews} />
      </Card>
    </Layout>
  );
};

export default LatestNews;
