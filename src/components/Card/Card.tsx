import classes from "./Card.module.css";

type CardTypes = {
  children: React.ReactNode;
};

const Card = ({ children }: CardTypes) => {
  return <section className={classes.container}>{children}</section>;
};

export default Card;
