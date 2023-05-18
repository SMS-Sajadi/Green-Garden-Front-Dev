import React, { useState } from "react";

const StarScore = (props) => {
  const [stars, setStars] = useState([]);
  const [rating, setRating] = useState(props.initialRating || 0);
  const [hovered, setHovered] = useState(0);
  const selectedIcon = "★";
  const deselectedIcon = "☆";
  const outOf = props.outOf ? props.outOf : 5;

  useState(() => {
    const starsList = [];
    for (let i = 0; i < outOf; i++) {
      starsList.push(i + 1);
    }
    setStars(starsList);
  }, []);

  const changeRating = (newRating) => {
    if (!props.initialRating) {
      if (props.initialRating !== 0) {
        setRating(newRating);

        if (props.onChange) {
          props.onChange(newRating);
        }
      }
    }
  };

  const hoverRating = (rating) => {
    setHovered(rating);
  };

  return (
    <div
      className="rating"
      style={{ fontSize: "1.5em", color: "#6dc77a", marginRight: "2.5em" }}
    >
      {stars.map((star) => {
        return (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              changeRating(star);
            }}
            onMouseEnter={() => {
              if (!props.initialRating) {
                if (props.initialRating !== 0) {
                  hoverRating(star);
                }
              } else {
                hoverRating(props.initialRating);
              }
            }}
            onMouseLeave={() => {
              hoverRating(0);
            }}
          >
            {rating < star
              ? hovered < star
                ? deselectedIcon
                : selectedIcon
              : selectedIcon}
          </span>
        );
      })}
    </div>
  );
};

export default StarScore;
