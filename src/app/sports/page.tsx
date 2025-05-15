import Loader from "@/components/Loader/Loader";
import Sports from "@/containers/Sports/Sports";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Sports />
    </Suspense>
  );
};

export default page;
