import React from "react";
// Components
import EditBussinessInfo from "../../components/profile/EditBussinessInfo";
import HeaderProfile from "../../components/profile/HeaderProfile";
//image
// import garden from "../../assets/images/plants/14.jpg";
import { useEffect, useState } from "react";
import { get_by_token } from "../../services/api";
import { useCookies } from "react-cookie";

const GardenSetting = () => {
  const [info, setInfo] = useState({});
  const [cookies, setCookie] = useCookies(["token"]);

useEffect(() => {
  const fetch = async () => {
    setInfo(await get_by_token("gardens/get_garden/", cookies["token"]));
};
fetch();

}, []);

  return (
    <div>
      <HeaderProfile
        prof_info={{
          image: info.profile_photo,
          name: info.name,
          describe: "گلخانه",
          owner: false,
          link: "",
        }}
      />
      
      <EditBussinessInfo information={info} />

    </div>
  );
};

export default GardenSetting;
