import { newsItemType } from "@/utilities/types";
import Image from "next/image";
import classes from "./NewsItemContainer.module.css";

type NewsItemContainerType = {
  data: newsItemType;
};

const NewsItemContainer = ({ data }: NewsItemContainerType) => {
  return (
    <li
      className={classes.container}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.open(data?.url);
        }
      }}
    >
      <Image src={data?.image} alt={data?.title} width={150} height={150} />
      <div>
        <a>{data?.title}</a>
        <p>
          {data?.author && (
            <>
              by <a>{data?.author}</a>{" "}
            </>
          )}{" "}
          on {data?.publishedAt}
        </p>
        <p>{data?.description}</p>
      </div>
    </li>
  );
};

export default NewsItemContainer;
