import Loader from "@/components/Loader/Loader";
import Africa from "@/containers/Africa/Africa";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Africa />
    </Suspense>
  );
};

export default page;
