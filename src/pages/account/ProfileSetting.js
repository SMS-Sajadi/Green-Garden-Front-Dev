import React from "react";

//image
import avatar from "../../assets/images/avatar-profie.svg";
// Component
import HeaderProfile from "../../components/profile/HeaderProfile";
import EditPersonalInfo from "../../components/profile/EditPersonalInfo";

const ProfileSetting = () => {
  return (
    <div>
      {/* <!-- Hero Start --> */}
      <HeaderProfile
        prof_info={{
          image: avatar,
          name: "الهام وهابی",
          describe: "کاربر خوش قلب گرین گاردن",
          owner: false,
          link: "/",
        }}
      />
      {/* <!-- Hero End --> */}

      <EditPersonalInfo />
    </div>
  );
};

export default ProfileSetting;
