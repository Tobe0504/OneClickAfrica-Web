"use client";

import classes from "./Layout.module.css";
import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { headerRoutes, routes } from "@/utilities/routes";
import NewsCarousel from "@/containers/NewsCarousel/NewsCarousel";

type LayoutPropTypes = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutPropTypes) => {
  // Router
  const pathname = usePathname();

  // Utils
  const activeRoute = headerRoutes.find((data) => {
    if (data?.children) {
      return { ...data?.children?.find((child) => child?.route === pathname) };
    }

    return data?.route === pathname;
  });

  console.log(activeRoute, "Check");

  return (
    <>
      <Head>
        <title>Tobe</title>
      </Head>
      <main className={classes.container}>
        <Header />
        <section className={className}>{children}</section>
        <Footer />

        <NewsCarousel />
      </main>
    </>
  );
};

export default Layout;
