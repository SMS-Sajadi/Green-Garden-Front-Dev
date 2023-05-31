import React, {useState} from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "../../featurs/toast";


//images and icons
import avatar from "../../assets/images/avatar-profie.svg";
import userIcon from "../../assets/icons/user-1-svgrepo-com.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import keyIcon from "../../assets/icons/key.svg";
import commentIcon from "../../assets/icons/comment.svg";
import { post } from "../../services/api";

const EditPersonalInfo = () => {

  const [avatarImage, setAvatarImage] = useState(avatar);
  const [password, setPassword] = useState({
    previous_password: '',
    new_password: '',
    confirm_pass: ''
  });
  const [personalInfo, setPersonalInfo] = useState({
    new_name: '',
    new_phone_number: '',
    new_email: '',
    describtion: '',
    new_image: ''
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatarImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteAvatar = () => {
    setAvatarImage(avatar);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', avatarImage);
    setPersonalInfo({...personalInfo, image: formData});
    post('user/edit/personal-info/', personalInfo);

  }

  const changeHandler = (event) => {
    setPersonalInfo({...personalInfo, [event.target.name] : event.target.value })
  }


  const passHandler = (event) => {
      setPassword({...password, [event.target.name] : event.target.value})
  }

  const changePassword = (event) => {
    event.preventDefault();
    if(password.confirm_pass !== password.new_password){
      notify('پسورد یکسان نیست.', 'error');
    }
    else{
      const res = post(' user/edit/password',{previous_password: password.previous_password, new_password: password.new_password});
      if(res.status === 200)
        notify('رمز با موفقیت تغییر یافت .')
    }

  }


  return (
    <section className="section mt-60">
      <div className="container mt-lg-3">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="card border-0 rounded shadow">
              <div className="card-body">
                <h5 className="text-md-start text-center">جزئیات شخصی :</h5>

                <div className="mt-3 text-md-start text-center d-sm-flex">
                  {/* <img
                    src={avatar}
                    className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4"
                    alt=""
                  /> */}

                  {/* <div className="mt-md-4 mt-3 mt-sm-0">
                    <button  className="btn btn-primary mt-2">
                      تغییر تصویر
                    </button>
                    <button  className="btn btn-outline-primary mt-2 ms-2">
                      حذف
                    </button>
                  </div> */}

<div className="mt-3 text-md-start text-center d-sm-flex">
                  <img
                    src={avatarImage}
                    className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4 card-shadow"
                    alt=""
                  />
<div className="mt-md-4 mt-3 mt-sm-0">
                    <label htmlFor="avatarInput" className="btn btn-primary mt-2">
                      تغییر تصویر
                      <input
                        id="avatarInput"
                        type="file"
                        accept="image/*"
                        className="d-none"
                        onChange={handleAvatarChange}
                      />
                    </label>
                    <button  className="btn btn-outline-primary mt-2 ms-2" onClick={handleDeleteAvatar}>
                      حذف
                    </button>
                  </div>
                </div>




                </div>

                <form onSubmit={submitHandler}>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">نام </label>
                        <div className="form-icon position-relative">
                          <img
                            src={userIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="new_name"
                            value={personalInfo.new_name}
                            id="first"
                            type="text"
                            className="form-control ps-5"
                            placeholder="نام "
                            onChange={changeHandler}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">شماره تلفن :</label>
                        <div className="form-icon position-relative">
                          <img
                            src={phoneIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="new_phone_number"
                            value={personalInfo.new_phone_number}
                            id="phone_number"
                            type="text"
                            className="form-control ps-5"
                            placeholder="تلفن "
                            onChange={changeHandler}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">ایمیل </label>
                        <div className="form-icon position-relative">
                          <img
                            src={emailIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <input
                            name="new_email"
                            value={personalInfo.new_email}
                            id="email"
                            type="email"
                            className="form-control ps-5"
                            placeholder="ایمیل شما "
                            onChange={changeHandler}

                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6"></div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">توضیحات </label>
                        <div className="form-icon position-relative">
                          <img
                            src={commentIcon}
                            className="fea icon-sm icons"
                            alt=""
                          />
                          <textarea
                            name="comments"
                            value={personalInfo.describtion}
                            id="comments"
                            rows="4"
                            className="form-control ps-5"
                            placeholder="توضیحات : اگر شرایط خاصی دارید وارد کنید"
                            onChange={changeHandler}

                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="btn btn-primary"
                        value="ذخیره تغییرات"
                      />
                    </div>
                  </div>
                </form>

                <div className="row">
                  <div className="col-md-6 mt-4 pt-2">
                    <h5>تغییر رمز عبور : </h5>
                    <form>
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              رمز عبور قدیمی :{" "}
                            </label>
                            <div className="form-icon position-relative">
                              <img
                                src={keyIcon}
                                className="fea icon-sm icons"
                                alt=""
                              />
                              <input
                                type="password"
                                name="previous_password"
                                value={passHandler.previous_password}
                                className="form-control ps-5"
                                placeholder="رمز قدیمی"
                                required=""
                                onChange={passHandler}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              رمز عبور جدید :{" "}
                            </label>
                            <div className="form-icon position-relative">
                              <img
                                src={keyIcon}
                                className="fea icon-sm icons"
                                alt=""
                              />
                              <input
                                type="password"
                                name="new_password"
                                value={password.new_password}
                                className="form-control ps-5"
                                placeholder="رمز جدید"
                                required=""
                                onChange={passHandler}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              تایید رمز عبور جدید :{" "}
                            </label>
                            <div className="form-icon position-relative">
                              <img
                                src={keyIcon}
                                className="fea icon-sm icons"
                                alt=""
                              />
                              <input
                                type="password"
                                name="confirm_pass"
                                value={password.confirm_pass}
                                className="form-control ps-5"
                                placeholder="رمز عبور جدید"
                                required=""
                                onChange={passHandler}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 mt-2 mb-0">
                          <button className="btn btn-primary" onClick={changePassword}>
                            ذخیره رمز عبور{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="rounded shadow mt-4">
              <div className="p-4 border-bottom">
                <h5 className="mb-0 text-danger">حذف اکانت :</h5>
              </div>

              <div className="p-4">
                <h6 className="mb-0">
                  آیا می خواهید حساب را حذف کنید؟ لطفاً زیر دکمه "حذف" را فشار
                  دهید
                </h6>
                <div className="mt-4">
                  <button className="btn btn-danger">حذف اکانت</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default EditPersonalInfo;
