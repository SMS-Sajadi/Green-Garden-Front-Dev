import React from 'react';
 import VerificationInput from "react-verification-input";
import axios from 'axios';


const ConfirmCode = () => {


    const handleCode = (event) =>{
        axios.post('http://localhost:8000/accounts/verify', event )
            .then(response => console.log(response) );



    }



    return (
        <div>
            <VerificationInput
                classNames={{
                    container: "container",
                    character: "character",
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                  }}
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