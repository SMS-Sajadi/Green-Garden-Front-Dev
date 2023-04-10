import React from 'react';
import { useNavigate } from 'react-router-dom';
//message
import {notify} from './toast.js';
//verification tool
import VerificationInput from "react-verification-input";
//API
import axios from 'axios';
//CSS
import '../templates/verifyCode.css'


const ConfirmCode = () => {

    const navigate = useNavigate();


    const handleCode = (event) =>{
        let res;

        axios.post('http://localhost:8000/accounts/verify', event )
            .then(response => res = response.is_ok );

        if(res){
            notify('با موفقیت ثبت نام شدید', 'success');
            navigate("/login");
        }
        else{
            console.log('again')
        }

    }



    return (
        <div className={'cont'}>
            <div className={'box'}>
                <h1 className={"title"}>تایید کد</h1>
                <VerificationInput
                    // classNames={{
                    //     container: "container",
                    //     character: "character",
                    //     characterInactive: "character--inactive",
                    //     characterSelected: "character--selected",
                    //   }}
                      length = {4}
                      validChars = {'0-9'}
                      placeholder = {'_'}
                      autoFocus = {true}
                      onComplete = {handleCode}
                />
            </div>


        </div>
    );
};

export default ConfirmCode;