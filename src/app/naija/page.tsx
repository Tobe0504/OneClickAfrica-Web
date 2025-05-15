import Loader from "@/components/Loader/Loader";
import Naija from "@/containers/Naija/Naija";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Naija />
    </Suspense>
  );
};

export default page;
