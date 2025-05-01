import classes from "./NewsVideo.module.css";

const NewsVideo = () => {
  return (
    <a className={classes.video}>
      <iframe
        height="315"
        src="https://www.youtube.com/embed/oLRH9LKjXYA?si=OW_abgAFKMq7JtAt"
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
