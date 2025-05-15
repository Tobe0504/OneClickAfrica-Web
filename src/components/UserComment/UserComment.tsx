import { commentType, newsType } from "@/utilities/types";
import classes from "./UserComment.module.css";

type UserCommentType = {
  data: commentType;
};

const UserComment = ({ data }: UserCommentType) => {
  return (
    <div className={classes.container}>
      <p>{data?.name || "No name"}</p>
      <p>{data?.comment}</p>
    </div>
  );
};

export default UserComment;
