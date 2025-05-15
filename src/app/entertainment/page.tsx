import Loader from "@/components/Loader/Loader";
import Entertainment from "@/containers/Entertainment/Entertainment";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Entertainment />
    </Suspense>
  );
};

export default page;
