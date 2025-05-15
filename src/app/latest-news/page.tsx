import Loader from "@/components/Loader/Loader";
import LatestNews from "@/containers/LatestNews/LatestNews";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LatestNews />
    </Suspense>
  );
};

export default page;
