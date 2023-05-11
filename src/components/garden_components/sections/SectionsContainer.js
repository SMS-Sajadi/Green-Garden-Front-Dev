import React from 'react'
import Panel from '../panel/Panel'
import DetailContainer from './DetailContainer'
import Products from './Products'

const SectionsContainer = () => {
  return (
    <div style={{ display: "flex", margin: "1px auto", justifyContent: "space-around"}}>
        <div style={{width :"20%", marginRight :"10px"}}>
        <Panel  />
        </div>
        <div style={{width :"70%"}} >
        <DetailContainer />
        <hr />
        <Products />
        </div>
    </div>
  )
}

export default SectionsContainer