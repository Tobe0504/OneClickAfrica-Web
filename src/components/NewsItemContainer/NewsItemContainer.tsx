import { newsType } from "@/utilities/types";
import Image from "next/image";
import classes from "./NewsItemContainer.module.css";

type NewsItemContainerType = {
  data: newsType;
};

const NewsItemContainer = ({ data }: NewsItemContainerType) => {
  return (
    <li className={classes.container}>
      <Image src={data?.image} alt={data?.title} width={150} height={150} />
      <div>
        <a>{data?.title}</a>
        <p>
          by <a>{data?.author}</a> on {data?.dateAndTime}
        </p>
        <p>{data?.summaryText}</p>
      </div>
    </li>
  );
};

export default NewsItemContainer;
