import { CircularProgress } from "@mui/material";
import classes from "./Button.module.css";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "null"
    | "invalid"
    | "delete"
    | "black"
    | "white";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
};

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
}: ButtonPropTypes) => {
  return (
    <button
      className={`${classes.button} ${
        type === "secondary"
          ? classes.secondary
          : type === "tertiary"
          ? classes.tertiary
          : type === "null"
          ? classes.null
          : type === "invalid"
          ? classes.invalid
          : type === "delete"
          ? classes.delete
          : type === "black"
          ? classes.black
          : type === "white"
          ? classes.white
          : classes.primary
      }`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? (
        <CircularProgress
          color="inherit"
          size={"1rem"}
          style={{ color: "#e54a42" }}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
