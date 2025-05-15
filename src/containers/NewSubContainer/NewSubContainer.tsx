"use client";

import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Paginator from "@/components/Paginator/Paginator";
import { useCategoryNews } from "@/hooks/useNews";
import Layout from "@/layouts/Layout/Layout";
import { useParams } from "next/navigation";
import { useState } from "react";

const NewSubContainer = () => {
  // Router
  const { category } = useParams();

  // States
  const [pageNumber, setPageNumber] = useState(1);

  // Requests
  const { isLoading, data } = useCategoryNews(
    { page: pageNumber },
    category as any
  );

  return (
    <Layout>
      <Card>
        <NewsListingsContainer
          header={String(category).toUpperCase()}
          news={data?.data}
          loading={isLoading}
        />
        <Paginator
          data={data?.data?.news}
          maxLimit={data?.data?.limit}
          pages={data?.data?.totalPages}
          isBackend
          setActiveNumberState={setPageNumber}
        />
      </Card>
    </Layout>
  );
};

export default NewSubContainer;
