import React from "react";
import { useNavigate } from "react-router-dom";
//message
import { notify } from "../featurs/toast";
//verification tool
import VerificationInput from "react-verification-input";
//API
import axios from "axios";
//CSS
import "../assets/styles/verifyCode.css";
// API 
import { postData } from "../services/api";
import { post } from "../services/api";
// Cookie
import { useCookies } from "react-cookie";

const ConfirmCode = () => {
  const [cookies, setCookie] = useCookies(["token"]);

  const navigate = useNavigate();

  const handleCode = async (event) => {
    var res = {};

    const context = {
      code: event,
    };

      res = await post("accounts/verify/", context);

      console.log(res)
    console.log(res.status)
    if (res.status === 200) {
      notify("با موفقیت ثبت نام شدید", "success");
      // set cookie
      setCookie("token", res.token, {path: "/" });
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;

      navigate("/home");
    } else {
      notify("رمز واردشده مطابقت ندارد", "error");
    }
  };

  return (
    <div className={"cont"}>
      <div className={"box"}>
        <h1 className={"title"}>تایید کد </h1>
        <span className="codeGuide">
          کد ارسال شده به ایمیل خود را در باکس زیر وارد کنید{" "}
        </span>

        <VerificationInput
          classNames={{
            characterInactive: "inprt_inactive",
            characterSelected: "input_select",
          }}
          length={4}
          validChars={"0-9"}
          placeholder={"."}
          autoFocus={true}
          onComplete={handleCode}
        />
      </div>
    </div>
  );
};

export default ConfirmCode;
