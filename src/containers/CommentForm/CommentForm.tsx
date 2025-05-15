import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import TextArea from "@/components/Textarea/TextArea";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import { Dispatch, SetStateAction } from "react";
import classes from "./CommentForm.module.css";

type commentType = {
  name: string;
  comment: string;
};

type CommentFormType = {
  state: commentType;
  setState: Dispatch<SetStateAction<commentType>>;
  onSubmit?: () => void;
  loading?: boolean;
};

const CommentForm = ({
  state,
  setState,
  loading,
  onSubmit,
}: CommentFormType) => {
  return (
    <form className={classes.container}>
      <h4>Add a new comment</h4>
      <Input
        label="Please tell us your name"
        name="name"
        value={state.name}
        onChange={(e) => {
          inputChangeHandler(e, setState);
        }}
      />
      <TextArea
        label="Comment"
        name="comment"
        value={state.comment}
        onChange={(e) => {
          inputChangeHandler(e, setState);
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();

          if (onSubmit) {
            onSubmit();
          }
        }}
        disabled={!state.comment || !state.name}
        loading={loading}
      >
        Submit
      </Button>
    </form>
  );
};

export default CommentForm;
