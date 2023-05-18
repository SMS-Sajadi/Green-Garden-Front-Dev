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


const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/account" element={<AccountProfile />} />
        <Route path="/account/setting" element={<ProfileSetting />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/plant-detail" element={<PlantDetail />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/" element={<Explore />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
