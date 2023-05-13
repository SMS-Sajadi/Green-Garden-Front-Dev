import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//API
import { postData } from "../services/api";

import { validate } from "../featurs/validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../featurs/toast";
//Styles and css
import Styles from "../assets/styles/Signup.module.css";
import "../assets/styles/box.css";
//Asseets
import girl from "../assets/images/Florist-cuate 1.svg";
import homeIcon from "../assets/icons/home.svg";
//component
import ThemeChange from "./ThemeChange";

const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});
  const [dark, setDark] = useState("false");

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touch]);

  const changeHandeler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });

    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const submitHandeler = async (event) => {
    event.preventDefault();
    let res = {};
    if (!Object.keys(errors).length) {
      const { name, email, password, phone_number } = data;
      const context = {
        name: name,
        email: email,
        password: password,
        phone_number: phone_number,
      };

      res = await postData("accounts/signup/", context);

      if (!res.is_ok) {
        notify("اطلاعات نامعتبر است", "error");
      } else {
        navigate("/signUp/verify");
      }
    } else {
      setTouch({
        name: true,
        email: true,
        phone_number: true,
        password: true,
        confirmPassword: true,
        // isAccepted: true,
      });
      notify("اطلاعات نامعتبر است", "error");
    }
  };

  const manageTheme = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? Styles.slcontainer : Styles.containerDark}>
      <div onClick={manageTheme}>
        <ThemeChange />
      </div>
      <img className={Styles.home} src={homeIcon} alt="" />

      <form
        onSubmit={submitHandeler}
        className={dark ? Styles.signup : Styles.signupDark}
      >
        <h1
          className={dark ? Styles.form_title : Styles.form_titleDark}
          id="signup"
        >
          ثبت نام
        </h1>
        <div className={Styles.form_holder}>
          <div className={Styles.input_div}>
            <label
              className={dark ? Styles.input_lable : Styles.input_lableDark}
            >
              نام کاربری
            </label>
            <input
              type="text"
              className={
                errors.name && touch.name
                  ? Styles.uncomplated
                  : Styles.form_input
              }
              name="name"
              value={data.name}
              placeholder="نام کاربری"
              onChange={changeHandeler}
            />

            {errors.name && touch.name && <span>{errors.name}</span>}
          </div>
          <div className={Styles.input_div}>
            <label
              className={dark ? Styles.input_lable : Styles.input_lableDark}
            >
              ایمیل
            </label>
            <input
              type="email"
              className={
                errors.email && touch.email
                  ? Styles.uncomplated
                  : Styles.form_input
              }
              name="email"
              value={data.email}
              placeholder="ایمیل"
              onChange={changeHandeler}
            />
            {errors.email && touch.email && <span>{errors.email}</span>}
          </div>
          <div className={Styles.input_div}>
            <label
              className={dark ? Styles.input_lable : Styles.input_lableDark}
            >
              شماره تلفن
            </label>
            <input
              type="text"
              className={
                errors.phone_number && touch.phone_number
                  ? Styles.uncomplated
                  : Styles.form_input
              }
              name="phone_number"
              value={data.phone_number}
              placeholder="شماره تلفن"
              onChange={changeHandeler}
            />
            {errors.phone_number && touch.phone_number && (
              <span>{errors.phone_number}</span>
            )}
          </div>
          <div className={Styles.input_div}>
            <label
              className={dark ? Styles.input_lable : Styles.input_lableDark}
            >
              رمز عبور
            </label>
            <input
              type="password"
              className={
                errors.password && touch.password
                  ? Styles.uncomplated
                  : Styles.form_input
              }
              name="password"
              value={data.password}
              placeholder="رمز عبور"
              onChange={changeHandeler}
            />
            {errors.password && touch.password && (
              <span>{errors.password}</span>
            )}
          </div>
          <div className={Styles.input_div}>
            <label
              className={dark ? Styles.input_lable : Styles.input_lableDark}
            >
              تایید رمز عبور
            </label>
            <input
              type="password"
              className={
                errors.confirmPassword && touch.confirmPassword
                  ? Styles.uncomplated
                  : Styles.form_input
              }
              name="confirmPassword"
              value={data.confirmPassword}
              placeholder="تایید رمز عبور"
              onChange={changeHandeler}
            />
            {errors.confirmPassword && touch.confirmPassword && (
              <span className={Styles.err}>{errors.confirmPassword}</span>
            )}
          </div>
          <div className={Styles.accept_div}>
            <div className={Styles.chekbox_div}>
              <label className={dark ? Styles.accept : Styles.input_lableDark}>
                ثبت نام به عنوان گلخانه‌دار
              </label>

              <div className="checkbox-wrapper-12">
                <div className="cbx">
                  <input
                    id="cbx-12"
                    type="checkbox"
                    name="isAccepted"
                    value={data.isAccepted}
                    onChange={changeHandeler}
                  />
                  <label></label>
                  <svg className="svgBox" width="15" height="14" fill="none">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={Styles.formButtons}>
          <Link to="/login" className={Styles.link}>
            ورود
          </Link>
          <button
            type="submit"
            className={dark ? Styles.submit_btn : Styles.submit_btnDark}
          >
            ثبت نام
          </button>
        </div>
      </form>
      <ToastContainer />
      <div className={Styles.pic}>
        <img src={girl} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
