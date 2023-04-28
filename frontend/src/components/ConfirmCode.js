import React from 'react';
import { useNavigate } from 'react-router-dom';
//message
import {notify} from '../featurs/toast';
//verification tool
import VerificationInput from "react-verification-input";
//API
import axios from 'axios';
//CSS
import '../assets/styles/verifyCode.css'


const ConfirmCode = () => {

    const navigate = useNavigate();


    const handleCode = async (event) =>{
        var res = {};      
        
        const context = {
            code: event,
        }

        await axios.post('http://localhost:8000/accounts/verify/', context)
            .then(response => res = response);

        if(res.data.is_ok){
            notify('با موفقیت ثبت نام شدید', 'success');
            navigate("/login");
        }
        else{
            notify('رمز واردشده مطابقت ندارد', 'error');
        }

    }


    return (
        <div className={'cont'}>
            <div className={'box'}>
                <h1 className={"title"}>تایید کد </h1>
                <span className='codeGuide'>کد ارسال شده به ایمیل خود را در باکس زیر وارد کنید </span>

                <VerificationInput
                    classNames={{
                        characterInactive: "inprt_inactive",
                        characterSelected: "input_select",
                      }}
                      length = {4}
                      validChars = {'0-9'}
                      placeholder = {'.'}
                      autoFocus = {true}
                      onComplete = {handleCode}
                />

            </div>


        </div>
    );
};

export default ConfirmCode;