import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../../assets/images/plants/fanj-J3-Pofva-_w-unsplash.jpg'
import image2 from '../../assets/images/plants/aloe vear.jpg'
import image3 from '../../assets/images/plants/remi-muller-CZxraRv02-A-unsplash.jpg'
import image4 from '../../assets/images/plants/shahpasand.jpg'

const Temp = () => {
    return (
   
          <div class="slide-card card-shadow" style={{borderRadius: '16px'}}>
        
        <AliceCarousel autoPlay autoPlayInterval="3000"


        >
         <img src={image1} className="sliderimg" alt=""/>
         <img src={image2} className="sliderimg" alt=""/>
         <img src={image3} className="sliderimg" alt=""/>
         <img src={image4} className="sliderimg" alt=""/>

       </AliceCarousel>

       </div>

       );
};

export default Temp;