import Loader from "@/components/Loader/Loader";
import HomePage from "@/containers/HomePage/HomePage";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <HomePage />
    </Suspense>
  );
}
