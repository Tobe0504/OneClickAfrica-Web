import classes from "./NewsVideo.module.css";

type NewsVideoTypes = {
  url: string;
};

const NewsVideo = ({ url }: NewsVideoTypes) => {
  return (
    <a className={classes.video}>
      <iframe
        height="315"
        src={`${url}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </a>
  );
};

export default NewsVideo;
