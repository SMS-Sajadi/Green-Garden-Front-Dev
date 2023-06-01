import React, {  useEffect, useState } from "react";
//Component
import PlantHeader from "../../components/plant/PlantHeader";
import PlantExplain from "../../components/plant/PlantExplain";
import { getData } from "../../services/api";
import { useParams } from 'react-router-dom';

var info = {

  name: 'آلوئه ورا',
  description: 'توضیحات گیاه',
  lihgt_intensity: 'زیاد',
  water: 'دوبار در هفته',
   type: 'همه فصله'
}

const PlantDetail = () => {

  const [info, setInfo] = useState({});
  const params = useParams();
  const plant_id = params.plant_id;

  useEffect(() => {
      const fetch = async () => {
          const data = await  getData(`/plants/${plant_id}`);
       console.log(data)
       setInfo(data);


      }

      fetch();

  }, [plant_id]);  
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
