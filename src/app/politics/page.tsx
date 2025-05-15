import Loader from "@/components/Loader/Loader";
import Politics from "@/containers/Politics/Politics";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Politics />
    </Suspense>
  );
};

export default page;
