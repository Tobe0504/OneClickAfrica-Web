import Loader from "@/components/Loader/Loader";
import Search from "@/containers/Search/Search";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Search />
    </Suspense>
  );
};

export default page;
