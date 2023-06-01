import React, { useEffect, useState } from "react";
import { get_for_user } from "../../services/api";
import { useCookies } from "react-cookie";

//image
import avatar from "../../assets/images/avatar-profie.svg";
// Component
import HeaderProfile from "../../components/profile/HeaderProfile";
import EditPersonalInfo from "../../components/profile/EditPersonalInfo";

const ProfileSetting = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  // const [info, setInfo] = useState({
  //   email: "mhrnzshahi@gmail.com",
  //   id: 0,
  //   image: "",
  //   is_garden_owner: false,
  //   name: "",
  //   phone_number: "",
  // });

  const [info, setInfo] = useState({});


  useEffect(() => {
    const fetch = async () => {
            setInfo(await get_for_user("accounts/get-user/", cookies["token"]));
    };
    fetch();
  }, []);

  return (
    <div>
      {/* <!-- Hero Start --> */}
      <HeaderProfile
        prof_info={{
          image: info.image,
          name: info.name,
          describe: "کاربر خوش قلب گرین گاردن",
          owner: false,
          link: "",
        }}
      />
      {/* <!-- Hero End --> */}




      {info && <EditPersonalInfo info={info} />}
    </div>
  );
};

export default ProfileSetting;
