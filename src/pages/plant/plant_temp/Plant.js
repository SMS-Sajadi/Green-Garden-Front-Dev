import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/footer/Footer";
import PlantDesc from "../components/plant/PlantDesc";
import PlantName from "../components/plant/PlantName";

const Plant = () => {
  return (
    <div>
      <Navbar />
<PlantName />
      <PlantDesc />

      <Footer />
    </div>
  );
};

export default Plant;
