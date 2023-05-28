import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import AccountProfile from "../pages/account/AccountProfile";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import ProfileSetting from "../pages/account/ProfileSetting";
import Explore from "../pages/explore/Explore";
import Garden from '../pages/garden/Garden';
import PlantDetail from "../pages/plant/PlantDetail";
import Suggestion from "../pages/suggestion/Suggestion";
import ErrorPage from "../pages/404/ErrorPage";
import GardenSetting from "../pages/garden/GardenSetting";
import AboutUs from "../pages/about us/AboutUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/account" element={<AccountProfile />} />
        <Route path="/account/setting" element={<ProfileSetting />} />
        <Route path="/garden/:gerden_id" element={<Garden />} />
        <Route path="/garden/setting" element={<GardenSetting />} />
        <Route path="/plant-detail/:plant_id" element={<PlantDetail />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/" element={<Explore />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
