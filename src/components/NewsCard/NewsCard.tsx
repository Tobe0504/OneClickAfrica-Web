import Image from "next/image";
import classes from "./NewsCard.module.css";

const NewsCard = () => {
  return (
    <a className={classes.container}>
      <div className={classes.pictureSection}>
        <Image
          src="https://res.cloudinary.com/dgiropjpp/image/upload/v1745870229/samples/smile.jpg"
          width={400}
          height={279}
          // TODO: Add the news title here
          alt="News"
        />
      </div>
      <div className={classes.textSection}>
        <p>News Header</p>
        <p>Date</p>
      </div>
    </a>
  );
};

export default NewsCard;
