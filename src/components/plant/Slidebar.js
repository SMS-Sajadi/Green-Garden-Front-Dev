import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

// import image1 from '../../assets/images/plants/fanj-J3-Pofva-_w-unsplash.jpg'
// import image2 from '../../assets/images/plants/aloe vear.jpg'
// import image3 from '../../assets/images/plants/remi-muller-CZxraRv02-A-unsplash.jpg'
// import image4 from '../../assets/images/plants/shahpasand.jpg'

const Slidebar = ({album}) => {
  
    return (
   

      <div className="slide-card card-shadow" style={{borderRadius: '32px'}}>
        
      <AliceCarousel autoPlay autoPlayInterval="3000"  infinite={true}>

      {Array.isArray(album) && album.map(item => {
            return  <img src={item.image_url} className="sliderimg" alt="" />      
          })}
   

     </AliceCarousel>

     </div>

       );
};

export default Slidebar;