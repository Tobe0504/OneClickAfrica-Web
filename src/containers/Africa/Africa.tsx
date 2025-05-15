"use client";

import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Paginator from "@/components/Paginator/Paginator";
import { useAfricaNews } from "@/hooks/useNews";
import Layout from "@/layouts/Layout/Layout";
import { useState } from "react";

const Africa = () => {
  // States
  const [pageNumber, setPageNumber] = useState(1);

  // Requests
  const { isLoading, data } = useAfricaNews({ page: pageNumber });

  return (
    <Layout>
      <Card>
        <NewsListingsContainer
          header="AFRICA"
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

export default Africa;
