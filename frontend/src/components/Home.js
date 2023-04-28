import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import AccountProfile from "../pages/account/AccountProfile";
import Navbar from "../components/Navbar";
import ProfileSetting from "../pages/account/ProfileSetting";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/account" element={<AccountProfile />} />
        <Route path="/account/setting" element={<ProfileSetting />} />
      </Routes>
    </div>
  );
};

export default Home;
