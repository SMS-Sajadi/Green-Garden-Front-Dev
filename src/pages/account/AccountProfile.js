import React, { useState, useEffect, useRef } from "react";

//images and icons
// import avatar from "../../assets/images/avatar-profie.svg";
import sun from "../../assets/icons/sun.svg";
import allergy from "../../assets/icons/allergy.svg";
import temp from "../../assets/icons/temp.svg";
import bill from "../../assets/icons/Layer_1 (1).svg";
import pet from "../../assets/icons/pet-svgrepo-com.svg";
import location from '../../assets/icons/location2.svg';
//API
import {postData, get_for_user} from "../../services/api";
//Component
import Personalnfo from "../../components/profile/Personalnfo";
import HeaderProfile from "../../components/profile/HeaderProfile";
import { useCookies } from "react-cookie";

const Account_profile = () => {
  const [defaultData, setDefaultData] = useState({});
  // const userInfoRef = useRef(null);
  const [userInfo, setUserInfo] = useState({});
  const [cookies, setCookie] = useCookies(["token"]);


    useEffect(() => {
      console.log(cookies)
      const fetch = async () => {
        const result = await get_for_user('accounts/get-user/', cookies['token'])
        console.log(result)
        setUserInfo(result)
      }
      console.log(userInfo)
      fetch();
  }, []);

  const handleSelectChange = (event) => {
    const name = event.target.name;
    const value = event.target.options[event.target.selectedIndex].text;

    setDefaultData({ ...defaultData, [name]: value });
  };

  const saveHandeler = () => {
    postData("accounts/", defaultData);
  };

  return (
    <div className="account">
      {/* <!-- Hero Start --> */}
      <HeaderProfile
        prof_info={{
          image: userInfo.image,
          name: userInfo.name,
          describe: "کاربر خوش قلب گرین گاردن",
          owner: true,
          link: "/home/account/setting",
        }}
      />
      {/* <!-- Hero End --> */}

      {/* <!-- Profile Start --> */}
      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="border-bottom pb-4">
                <div className="row">
                  <Personalnfo
                    info={{
                      name: userInfo.name,
                      email: userInfo.email,
                      phone_number: userInfo.phone_number,
                      saved: userInfo.save,
                    }}
                  />

                  <div className="col-md-6 mt-4 pt-2 pt-sm-0 info">
                    <h5>اطلاعات محیط :</h5>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src={sun} className="avatar avatar-ex-sm" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0"> نور محیط</h4>
                        <select
                          name="light intensity"
                          onChange={handleSelectChange}
                        >
                          <option value="3">زیاد</option>
                          <option value="2">متوسط</option>
                          <option value="1">کم</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img
                        src={allergy}
                        className="avatar avatar-ex-sm"
                        alt=""
                      />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0"> حساسیت</h4>
                        <select name="allergy" onChange={handleSelectChange}>
                          <option value="false">ندارم</option>
                          <option value="true">دارم</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src={location} className="avatar avatar-ex-sm" alt=""  style={{width: '32px'}}/>
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0">محیط </h4>
                        <select
                          name="location_type"
                          onChange={handleSelectChange}
                        >
                          <option value="1">آپارتمان</option>
                          <option value="2"> بسته </option>
                          <option value="3"> باز</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src={bill} className="avatar avatar-ex-sm" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0">وقت رسیدگی </h4>
                        <select
                          name="maintenance"
                          onChange={handleSelectChange}
                        >
                          <option value="1"> هر روز </option>
                          <option value="2"> دوبار در هفته </option>
                          <option value="3"> هفته‌ای یکبار </option>
                          <option value="4"> دوهفته یکبار</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src={pet} className="avatar avatar-ex-sm" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0"> حیوان خانگی </h4>
                        <select name="pet" onChange={handleSelectChange}>
                          <option value="true"> دارم </option>
                          <option value="false"> ندارم </option>
                        </select>
                      </div>
                    </div>

                    <div className="savebtn">
                      <button
                        className="btn btn-primary"
                        onClick={saveHandeler}
                      >
                        ذخیره
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Profile End --> */}
    </div>
  );
};

export default Account_profile;
