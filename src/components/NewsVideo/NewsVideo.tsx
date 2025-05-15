import classes from "./NewsVideo.module.css";

type NewsVideoTypes = {
  url: string;
};

const NewsVideo = ({ url }: NewsVideoTypes) => {
  return (
    <a className={classes.video}>
      <iframe
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={false}
      ></iframe>
    </a>
  );
};

export default NewsVideo;
