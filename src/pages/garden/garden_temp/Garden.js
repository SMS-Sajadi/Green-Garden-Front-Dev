import React from "react";
import Navbar from "../components/Navbar";
import GardenName from "../components/GardenName";
import Footer from "../components/footer/Footer";
import CommentsContainer from "../components/comments/CommentsContainer";
import DetailContainer from './../components/sections/DetailContainer';
import Products from './../components/sections/Products';
import SectionsContainer from "../components/sections/SectionsContainer";

const Garden = () => {
  return (
    <div>
      <Navbar />
      <GardenName />
      <hr />
      <SectionsContainer />
      <hr />
      <CommentsContainer />
      <Footer />
    </div>
  );
};

export default Garden;
