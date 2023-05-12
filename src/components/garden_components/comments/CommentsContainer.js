import React from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" , margin: "2rem 0" }}>
      <CommentsList/>
      <AddComment />
    </div>
  );
};

export default CommentsContainer;
