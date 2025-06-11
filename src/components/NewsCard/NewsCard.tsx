import { newsItemType } from "@/utilities/types";
import { capitalize } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import classes from "./NewsCard.module.css";

type NewsCardTypes = {
  data: newsItemType;
};

const NewsCard = ({ data }: NewsCardTypes) => {
  return (
    <a
      className={classes.container}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.open(data?.url);
        }
      }}
    >
      <div className={classes.pictureSection}>
        {data?.image ? (
          <Image src={data?.image} width={400} height={279} alt={data?.title} />
        ) : (
          <div>Headline</div>
        )}
      </div>
      <div className={classes.textSection}>
        <p>{data?.title}</p>
        <p>
          {format(data?.publishedAt, "do MMMM, yyyy. hh:mma")} from{" "}
          <span>{capitalize(data?.source)}</span>
        </p>
      </div>
    </a>
  );
};

export default NewsCard;
