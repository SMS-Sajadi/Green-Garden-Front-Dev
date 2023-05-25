import React from "react";
// Components
import EditBussinessInfo from "../../components/profile/EditBussinessInfo";
import EditPersonalInfo from "../../components/profile/EditPersonalInfo";
import HeaderProfile from "../../components/profile/HeaderProfile";
//image
import garden from "../../assets/images/plants/14.jpg";

const GardenSetting = () => {
  return (
    <div>
      <HeaderProfile
        prof_info={{
          image: garden,
          name: "گلخانه رز",
          describe: "گلخانه",
          owner: false,
          link: "",
        }}
      />
      
      <EditBussinessInfo />

      <EditPersonalInfo/>
    </div>
  );
};

export default GardenSetting;
