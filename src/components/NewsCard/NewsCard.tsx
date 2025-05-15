import { newsItemType } from "@/utilities/types";
import { format } from "date-fns";
import Image from "next/image";
import classes from "./NewsCard.module.css";

type NewsCardTypes = {
  data: newsItemType;
};

const NewsCard = ({ data }: NewsCardTypes) => {
  return (
    <a className={classes.container}>
      <div className={classes.pictureSection}>
        {data?.image && (
          <Image src={data?.image} width={400} height={279} alt={data?.title} />
        )}
      </div>
      <div className={classes.textSection}>
        <p>{data?.title}</p>
        <p>{format(data?.publishedAt, "do MMMM, yyyy. hh:mma")}</p>
      </div>
    </a>
  );
};

export default NewsCard;
