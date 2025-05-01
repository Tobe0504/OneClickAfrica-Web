"use client";

import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Layout from "@/layouts/Layout/Layout";
import { dummyNews } from "@/utilities/data";
import { useParams } from "next/navigation";

const NewSubContainer = () => {
  // Router
  const { category } = useParams();

  return (
    <Layout>
      <Card>
        <NewsListingsContainer
          header={String(category).toUpperCase()}
          news={dummyNews}
        />
      </Card>
    </Layout>
  );
};

export default NewSubContainer;
