import classes from "./HeaderText.module.css";

type HeaderTextTypes = { children: string };

const HeaderText = ({ children }: HeaderTextTypes) => {
  return <h2 className={classes.text}>{children}</h2>;
};

export default HeaderText;
