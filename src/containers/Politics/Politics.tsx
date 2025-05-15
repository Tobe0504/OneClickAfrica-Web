"use client";

import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Paginator from "@/components/Paginator/Paginator";
import { usePoliticsNews } from "@/hooks/useNews";
import Layout from "@/layouts/Layout/Layout";
import { dummyNews } from "@/utilities/data";
import { useState } from "react";

const Politics = () => {
  // States
  const [pageNumber, setPageNumber] = useState(1);

  // Requests
  const { isLoading, data } = usePoliticsNews({ page: pageNumber });

  return (
    <Layout>
      <Card>
        <NewsListingsContainer
          header="POLITICS"
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

export default Politics;
