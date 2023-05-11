import React from "react";
//Component
import PlantHeader from "../../components/plant/PlantHeader";
import PlantExplain from "../../components/plant/PlantExplain";

const PlantDetail = () => {
  return (
    <div>
      <PlantHeader />

      <div class="position-relative">
        <div class="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section class="section pb-0">
      <PlantExplain />

      </section>
    </div>
  );
};

export default PlantDetail;