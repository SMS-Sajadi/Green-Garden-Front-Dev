import React from "react";
//Component
import PlantHeader from "../../components/plant/PlantHeader";
import PlantExplain from "../../components/plant/PlantExplain";

const info = {

  name: 'آلوئه ورا',
  description: 'توضیحات گیاه',
  lihgt_intensity: 'زیاد',
  water: 'دوبار در هفته',
   type: 'همه فصله'
}

const PlantDetail = () => {

  
  return (
    <div>
      <PlantHeader name = {info.name}/>

      <section className="section pb-0">
      <PlantExplain info={info}/>

      </section>
    </div>
  );
};

export default PlantDetail;
