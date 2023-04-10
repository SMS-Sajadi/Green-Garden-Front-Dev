import React from 'react';
import { useNavigate } from 'react-router-dom';
import {notify} from './toast.js';
 import VerificationInput from "react-verification-input";
import axios from 'axios';


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
        <div>
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
    );
};

export default ConfirmCode;