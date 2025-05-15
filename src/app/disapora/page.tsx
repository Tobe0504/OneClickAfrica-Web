import Loader from "@/components/Loader/Loader";
import Diaspora from "@/containers/Diaspora/Diaspora";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Diaspora />
    </Suspense>
  );
};

export default page;
