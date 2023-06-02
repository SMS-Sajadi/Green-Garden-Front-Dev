import React from "react";
// Component
import StarScore from "../score/StarScore";
// image
import man from "../../assets/images/avatar-svgrepo-com.svg";

const CommentShow = ({ comment_info }) => {
  const { name, comment_message, score, date, profile } = comment_info;
  return (
    <>
      <li>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div className="pe-3">
              <img
                src={profile ? profile : man}
                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                alt="img"
              />
            </div>

            <div className="flex-1 commentor-detail">
              <h6 className="mb-0">{name}</h6>
              <small className="text-muted">{date}</small>
            </div>
          </div>

          <StarScore
            outOf={5}
            className="mdi mdi-star text-warning"
            initialRating={score}
          />
        </div>
        <div className="mt-3">
          <p className="text-muted fst-italic p-3 bg-light rounded">
            {comment_message}
          </p>
        </div>
      </li>
    </>
  );
};

export default CommentShow;
