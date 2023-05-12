import React from 'react'
import parvaneKasb from "../../assets/parvaneKasb.png"

const Credential = () => {
  return (
    <div  className='detailsContainer'>
           <h2> اعتبارسنجی کسب و کار</h2>
        <p className='colors'>شناسه کسب</p>
        <p>91-5643</p>
        <p className='colors'>پروانه کسب </p>
       <img src={parvaneKasb} alt="parvaneKasb" />
    </div>
  )
}

export default Credential