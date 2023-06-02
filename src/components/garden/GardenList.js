import React from "react";
// Component
import StarScore from "../score/StarScore";
import { Link } from "react-router-dom";

const GardenList = ({ info }) => {
  const { name, img, id, score } = info;
  return (
    <tr key={id + score}>
      <td>
        <img
          src={`http://127.0.0.1:8000/${img}`}
          alt=""
          style={{
            margin: "0px 12px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
          }}
        />
        <Link to={`/home/garden/${id}`}>{name}</Link>
      </td>

      <td className="list-unstyled mb-0">
        <div className="tdst-inline-item">
          <StarScore
            key={id * score}
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
