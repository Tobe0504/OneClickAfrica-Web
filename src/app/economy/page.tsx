import Loader from "@/components/Loader/Loader";
import Economy from "@/containers/Economy/Economy";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Economy />
    </Suspense>
  );
};

export default page;
