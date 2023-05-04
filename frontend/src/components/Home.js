import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import AccountProfile from "../pages/account/AccountProfile";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import ProfileSetting from "../pages/account/ProfileSetting";
import Explore from "../pages/explore/Explore";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/account" element={<AccountProfile />} />
        <Route path="/account/setting" element={<ProfileSetting />} />
        <Route path="/" element={<Explore />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
