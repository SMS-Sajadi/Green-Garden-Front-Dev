import React from 'react'
import Details from './Details'
import Credential from './Credential'

const DetailContainer = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
        <Details />
        <Credential />
    </div>
  )
}

export default DetailContainer