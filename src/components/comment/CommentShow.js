import React from "react";
// Component
import StarScore from "../score/StarScore";
// image
import man from "../../assets/images/avatar-svgrepo-com.svg";

const CommentShow = ({ comment_info }) => {
  const { name, comment_message, score, date, time } = comment_info;
  return (
    <div className="col mt-4">
      <h5> نظرات :</h5>

      <ul className="media-list list-unstyled mb-0">
        <li>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="pe-3">
                <img
                  src={man}
                  className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                  alt="img"
                />
              </div>

              <div className="flex-1 commentor-detail">
                <h6 className="mb-0">{name}</h6>
                <small className="text-muted">
                  {date} {` - ${time}`}
                </small>
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
      </ul>
    </div>
  );
};

export default CommentShow;
