import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//API
import { post, checkToken } from "../services/api";
// Cookie
import { useCookies } from 'react-cookie';


import { validate } from "../featurs/validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../featurs/toast";
//Styles and css
import Styles from "../assets/styles/Signup.module.css";
//Assets
import bro from "../assets/images/Mobile login-bro 1.svg";
import homeIcon from "../assets/icons/home.svg";
//component
import ThemeChange from "./ThemeChange";

const Login = () => {

  const [cookies, setCookie] = useCookies(['token']);


  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});
  const [dark, setDark] = useState("false");

  useEffect(() => {
    setErrors(validate(data, "login"));
    const token = cookies["token"];
    console.log(token)
    // if (token) {
    //   checkToken("accounts/login/", token)
    //     .then((response) => {
    //       // if token valid set the token to header
    //       if (response.status === 200) {
    //         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //       }
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
  }, [data, touch]);

  const changeHandeler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });

    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandeler = async (event) => {
    var res = {};
    event.preventDefault();
    if (!Object.keys(errors).length) {
      const whole_res = await post("accounts/login/", data);
      res = whole_res.data
      console.log(whole_res.status)
      if (whole_res.status === 200) {
        notify(":) خوش آمدید", "success");

        const token = cookies["token"];
        // Set token if isn't save
        if (!token) {
          setCookie('token', res.token, { path: '/' });
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }    

        navigate("/home");
      } else {
        notify("اطلاعات نامعتبر است", "error");
      }
    } else {
      setTouch({
        email: true,
        password: true,
      });
      notify("اطلاعات  نامعتبر است", "error");
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

      <Link to="/home">
        <img className={Styles.home} src={homeIcon} alt="" />
      </Link>

      <form
        onSubmit={submitHandeler}
        className={dark ? Styles.signup : Styles.signupDark}
      >
        <h1
          className={dark ? Styles.form_title : Styles.form_titleDark}
          id="signup"
        >
          ورود
        </h1>
        <div className={Styles.form_holder}>
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
              رمز عبور
            </label>
            <input
              type="password"
              className={Styles.form_input}
              name="password"
              value={data.password}
              placeholder="رمز عبور"
              onChange={changeHandeler}
            />
          </div>
        </div>
        <div className={Styles.formButtons}>
          <Link to="/signUp" className={Styles.link}>
            حساب کاربری ندارید؟ ثبت نام
          </Link>
          <button
            type="submit"
            className={dark ? Styles.submit_btn : Styles.submit_btnDark}
          >
            ورود
          </button>
        </div>
      </form>
      <ToastContainer />
      <div className={Styles.pic}>
        <img src={bro} alt="" />
      </div>
    </div>
  );
};

export default Login;
