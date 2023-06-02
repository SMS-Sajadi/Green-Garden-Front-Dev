import React, { useEffect, useState } from "react";
import { getData } from "../../services/api";
import SaveCard from "../../components/SaveCard";

// Icon & image
import addIcon from "../../assets/icons/add-circle.svg";
import avatar from '../../assets/images/plants/aloe vear.jpg';

const AddPlant = () => {
  const [data, setData] = useState();
  const [selectPlants, setSelectPlants] = useState([]);
  const [avatarImage, setAvatarImage] = useState(avatar);
  const [info, setInfo] = useState({
    light_intensity: "",
    temperature: "",
    type: "",
    location_type: "",
    water: "",
    growth: "",
    pet_compatible: false,
    allergy_campatible: false,
    maintenance: "",
    edible: false,
    attension_need: "",
    seasonal: "",
    fragrance: false,
    main_img: '',
  });


  useEffect(() => {
    const fetch = async () => {
      const res = await getData("plants/list/");
      console.log(res);

      setData(res);
    };

    fetch();
  }, []);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatarImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteAvatar = () => {
    if (avatarImage === avatar) {
      return;
    }
    if (info.main_img === avatarImage) {
      setAvatarImage(avatar);
    } else if (!info.main_img) {
      setAvatarImage(avatar);
    } else {
      setAvatarImage(info.main_img);
    }
  };


  const handleSelectChange = (event) => {
    const name = event.target.name;
    const value = event.target.options[event.target.selectedIndex].value;

    setData({ ...data, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
        {/* select plants */}
      <section
        className="section-two mt-5"
        id="bookroom"
        style={{ padding: "60px 0 0 0" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12"></div>
            <h4 className="mb-4">
                  {" "}
                  گیاهان منتخب خود را به گلخانه خود اضافه کنید.
                </h4>


            {Array.isArray(data) &&
              data.map((item) => {
                return <SaveCard info={item} icon={addIcon}/>;
              })}
          </div>
        </div>
      </section>

      <section
        className="section-two mt-5"
        id="bookroom"
        style={{ padding: "60px 0 0 0" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <form
                className="p-4 shadow bg-white rounded"
                onSubmit={submitHandler}
              >
                <h4 className="mb-4">
                    می‌توانید خودتان گیاهی  وارد کنید :
                </h4>
                <span>موارد ستاره‌دار الزامی است :)</span>

                <div className="row text-start" style={{ marginTop: "30px" }}>


                <div className="mt-3 text-md-start text-center d-sm-flex mb-5">
                  <div className="mt-3 text-md-start text-center d-sm-flex">
                    <img
                      src={avatarImage}
                      className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4 shadow"
                      alt=""
                    />
                    <div className="mt-md-4 mt-3 mt-sm-0">
                      <label
                        htmlFor="avatarInput"
                        className="btn btn-primary mt-2"
                      >
                        تغییر تصویر
                        <input
                          id="avatarInput"
                          type="file"
                          accept="image/*"
                          className="d-none"
                          onChange={handleAvatarChange}
                        />
                      </label>
                      <button
                        className="btn btn-outline-primary mt-2 ms-2"
                        onClick={handleDeleteAvatar}
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                </div>


                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label">
                        {" "}
                        میزان نور <span className="text-danger">*</span> :{" "}
                      </label>
                      <select
                        required
                        className="form-control"
                        name="light_intensity"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="3">زیاد</option>
                        <option value="2">متوسط</option>
                        <option value="1">کم</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label">
                        {" "}
                        دما <span className="text-danger">*</span> :{" "}
                      </label>
                      <select
                        required
                        className="form-control"
                        name="temperature"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="1">گرم </option>
                        <option value="2">شرجی</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label">
                        {" "}
                        میزان آبدهی <span className="text-danger">
                          *
                        </span> :{" "}
                      </label>
                      <select
                        required
                        className="form-control "
                        name="water"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="1">هر روز</option>
                        <option value="2">دو روز یکبار</option>
                        <option value="3">هر هفته</option>
                        <option value="4">دو هفته یکبار</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label">
                        {" "}
                        نوع گیاه <span className="text-danger">*</span> :{" "}
                      </label>
                      <select
                        required
                        className=" form-control"
                        name="type"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="1">خاردار</option>
                        <option value="2">گل‌دار</option>
                        <option value="3">بدون گل</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label">
                        {" "}
                        نوع محیط <span className="text-danger">*</span> :{" "}
                      </label>
                      <select
                        required
                        className="form-control"
                        name="location_type"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="1">آپارتمانی</option>
                        <option value="2">بسته</option>
                        <option value="3">باز</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label"> مرحله رشد : </label>
                      <select
                        className="form-control"
                        name="growth"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="1">بذر</option>
                        <option value="2">نهال</option>
                        <option value="3">رشد کامل</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label"> حیوان خانگی : </label>
                      <select
                        className="form-control"
                        name="pet_compatible"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="true">دارم</option>
                        <option value="false">ندارم</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label"> حساسیت : </label>
                      <select
                        className="form-control"
                        name="allergy_campatible"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="true">دارم</option>
                        <option value="false">ندارم</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label"> زمان رسیدگی : </label>
                      <select
                        className="form-control"
                        name="attension_need"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="1">روزانه</option>
                        <option value="2">هفتگی</option>
                        <option value="3">ماهیانه</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label"> خوراکی : </label>
                      <select
                        className="form-control"
                        name="edible"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="true">باشد</option>
                        <option value="false">نباشد</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label"> فصلی : </label>
                      <select
                        className="form-control"
                        name="seasonal"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="1">بهار</option>
                        <option value="2">تابستان</option>
                        <option value="3">پاییز</option>
                        <option value="4">زمستان</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label"> عطری : </label>
                      <select
                        className="form-control"
                        name="fragrance"
                        onChange={handleSelectChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="true">باشد</option>
                        <option value="false">نباشد</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4 mt-lg-4 pt-2 pt-lg-1">
                    <div className="d-grid">
                      <input
                        type="submit"
                        id="search"
                        name="search"
                        className="searchbtn btn btn-primary"
                        value="افزودن "
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPlant;
