"use client";

import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Paginator from "@/components/Paginator/Paginator";
import { useSearchNews } from "@/hooks/useNews";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import Layout from "@/layouts/Layout/Layout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // States
  const [pageNumber, setPageNumber] = useState(1);

  // Router
  const search = updateSearchParams("search", undefined, "get");
  const router = useRouter();

  // Requests
  const { isLoading, data } = useSearchNews({
    page: pageNumber,
    search: search as string,
  });

  //   Effects
  useEffect(() => {
    if (!search?.trim()) {
      router.back();
    }
  }, [search]);

  return (
    <Layout>
      <Card>
        <NewsListingsContainer
          header={`Search results for ${search}`}
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

export default Search;
