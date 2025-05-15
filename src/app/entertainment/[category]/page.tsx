import Loader from "@/components/Loader/Loader";
import NewSubContainer from "@/containers/NewSubContainer/NewSubContainer";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <NewSubContainer />;
    </Suspense>
  );
};

export default page;
