"use client";

import { useLatestNews } from "@/hooks/useNews";
import { newsItemType } from "@/utilities/types";
import React, { useEffect, useMemo, useRef } from "react";
import { HorizontalTicker, VerticalTicker } from "react-infinite-ticker";
import classes from "./NewsCarousel.module.css";

const NewsCarousel = () => {
  // Requests
  const { data, isLoading } = useLatestNews({ page: 1 });

  // Memos
  const news = useMemo(() => {
    return data?.data?.news;
  }, [data]);

  const renderNewsItems = (prefix: any) =>
    news?.map((data: newsItemType) => (
      <a
        key={`${prefix}-${data?._id}`}
        href={data?.url}
        target="_blank"
        rel="noreferrer"
      >
        <div>{data?.title}</div>
        <span></span>
      </a>
    ));

  if (!data || isLoading) {
    return <></>;
  }

  return (
    <section className={classes.container} aria-live="polite">
      <div className={classes.innerContainer}>
        {news && (
          <HorizontalTicker duration={100000} easing="ease-in-out">
            {renderNewsItems("set1")}
          </HorizontalTicker>
        )}
      </div>
    </section>
  );
};

export default NewsCarousel;
