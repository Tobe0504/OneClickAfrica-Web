"use client";

import { newsType } from "@/utilities/types";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import NewsItemContainer from "../NewsItemContainer/NewsItemContainer";
import classes from "./NewsListingsContainer.module.css";

type NewsListingsContainerType = {
  header: string;
  news: newsType;
  route?: string;
  hasBorder?: boolean;
  loading?: boolean;
};

const NewsListingsContainer = ({
  header,
  news,
  route,
  hasBorder,
  loading,
}: NewsListingsContainerType) => {
  // Router
  const router = useRouter();
  const pathname = usePathname();

  // Memos
  const newsData = useMemo(() => {
    return news?.news;
  }, [news]);

  return (
    <section
      className={`${classes.container} ${
        hasBorder ? classes.topBorder : undefined
      }`}
    >
      <h3>{header}</h3>

      {loading ? (
        <Loader />
      ) : (
        <>
          <ul className={classes.newsListingsContainer}>
            {pathname === "/"
              ? newsData?.slice(0, 10)?.map((news, i) => {
                  return <NewsItemContainer data={news} key={i} />;
                })
              : newsData?.map((news, i) => {
                  return <NewsItemContainer data={news} key={i} />;
                })}
          </ul>

          {route && (
            <Button
              onClick={() => {
                router.push(route);
              }}
            >
              READ MORE
            </Button>
          )}
        </>
      )}
    </section>
  );
};

export default NewsListingsContainer;
