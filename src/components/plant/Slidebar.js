import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const Slidebar = ({album, main_img}) => {
  const obj = {img: main_img}
  album.unshift(obj);

     
    return (
   

      <div className="slide-card card-shadow" style={{borderRadius: '32px'}}>
        
      <AliceCarousel autoPlay autoPlayInterval="2000"  infinite={true}>

      {Array.isArray(album) && album.map(item => {
            return  <img src={item.img} className="sliderimg" alt="" />      
      })}
   

     </AliceCarousel>

     </div>

       );
};

export default Slidebar;