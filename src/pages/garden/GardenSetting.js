import React from "react";
// Components
import EditBussinessInfo from "../../components/profile/EditBussinessInfo";
import HeaderProfile from "../../components/profile/HeaderProfile";
//image
// import garden from "../../assets/images/plants/14.jpg";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";

const GardenSetting = () => {
  const [info, setInfo] = useState({});
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("garden/edit/profile/");
      setInfo(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeaderProfile
        prof_info={{
          image: info.image,
          name: info.name,
          describe: "گلخانه",
          owner: false,
          link: "",
        }}
      />
      
      <EditBussinessInfo />

    </div>
  );
};

export default GardenSetting;
