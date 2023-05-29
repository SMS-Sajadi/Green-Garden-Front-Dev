import React from "react";
// Component
import StarScore from "../score/StarScore";

const GardenList = ({info}) => {
    const {name, image, id, score} = info;
  return (
    <tr key={id+score}>
      <td>
        <img
          src={image}
          alt=""
          style={{
            margin: "0px 12px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
          }}
        />
        {name}
      </td>

      <td className="list-unstyled mb-0">
        <div className="tdst-inline-item"
        
        >
          <StarScore
            key={id*score}
            outOf={5}
            initialRating={score}
            className="mdi mdi-star text-warning"
          />
        </div>
      </td>
    </tr>
  );
};

export default GardenList;
