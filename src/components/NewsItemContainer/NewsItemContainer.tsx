import { commentType, newsItemType, requestType } from "@/utilities/types";
import Image from "next/image";
import classes from "./NewsItemContainer.module.css";
import { format } from "date-fns";
import ChevronDown from "@/assets/svgIcons/ChevronDown";
import UserComment from "../UserComment/UserComment";
import CommentForm from "@/containers/CommentForm/CommentForm";
import { useState } from "react";
import { requestHandler } from "@/helpers/requestHandler";
import useError from "@/hooks/useError";
import { useToast } from "@/context/ToastContext";
import { useNewsComments } from "@/hooks/useNews";
import Loader from "../Loader/Loader";
import { mutate } from "swr";
import { generateQueryString } from "@/helpers/generateQueryString";

type NewsItemContainerType = {
  data: newsItemType;
};

const NewsItemContainer = ({ data }: NewsItemContainerType) => {
  // States
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState({
    name: "",
    comment: "",
  });
  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });
  const [pageNumber, setPageNumber] = useState(1);

  // Hooks
  const { errorFlowFunction } = useError();
  const { showToast } = useToast();

  const { isLoading, data: commentsData } = useNewsComments(
    showComments ? data?._id : undefined,
    { page: pageNumber }
  );

  // Request
  const submitComentHandler = () => {
    requestHandler({
      url: "/comments/comments",
      method: "POST",
      data: {
        ...comment,
        newsId: data?._id,
      },
      state: requestState,
      setState: setRequestState,
      errorFunction(err) {
        errorFlowFunction(err);
      },
      successFunction(res) {
        showToast(res?.data?.message);
        if (showComments) {
          mutate(
            generateQueryString(`/comments/comments/${data?._id}`, {
              page: pageNumber,
            })
          );
        }
        setComment((prevState) => {
          return { ...prevState, comment: "" };
        });
      },
    });
  };

  return (
    <li className={classes.outerContainer}>
      <div
        className={classes.container}
        onClick={() => {
          if (typeof window !== "undefined") {
            window.open(data?.url);
          }
        }}
      >
        {data.image ? (
          <Image src={data?.image} alt={data?.title} width={150} height={150} />
        ) : (
          <div className={classes.greyBackground}></div>
        )}
        <div>
          <a>{data?.title}</a>
          <p>
            {data?.author && (
              <>
                by <a>{data?.author}</a>{" "}
              </>
            )}{" "}
            on {format(data?.publishedAt, "do MMMM, yyyy. hh:mm a")}
          </p>
          <p>{data?.description}</p>
        </div>
      </div>

      <div className={classes.commentsContainer}>
        <div
          onClick={() => {
            setShowComments((prevState) => !prevState);
          }}
        >
          <span>View comments</span>
          <ChevronDown isActive={showComments} />
        </div>

        <div
          className={classes.commentInteractionContainer}
          style={showComments ? { maxHeight: "1000px" } : { maxHeight: "0px" }}
        >
          <div className={classes.comments}>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {commentsData?.data?.comments?.length > 0 ? (
                  commentsData?.data?.comments?.map((comment: commentType) => {
                    return <UserComment data={comment} />;
                  })
                ) : (
                  <p className={classes.noComment}>
                    No comments for this post yet
                  </p>
                )}
              </>
            )}
          </div>

          <CommentForm
            state={comment}
            setState={setComment}
            loading={requestState.isLoading}
            onSubmit={submitComentHandler}
          />
        </div>
      </div>
    </li>
  );
};

export default NewsItemContainer;
