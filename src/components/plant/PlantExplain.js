import React from "react";
import Slidebar from '../../components/plant/Slidebar';

import image from '../../assets/images/plants/22.png'

const PlantExplain = () => {
  return (
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5">
        <Slidebar />

        </div>

        <div class="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title ms-md-4">
            <h4 class="title">آلوئه ورا</h4>
            <h5 class="text-muted">
              گیاه همه فصله
            </h5>
            <ul class="list-unstyled text-warning h5 mb-0">
              <li class="list-inline-item">
                <i class="mdi mdi-star"></i>
              </li>
              <li class="list-inline-item">
                <i class="mdi mdi-star"></i>
              </li>
              <li class="list-inline-item">
                <i class="mdi mdi-star"></i>
              </li>
              <li class="list-inline-item">
                <i class="mdi mdi-star"></i>
              </li>
              <li class="list-inline-item">
                <i class="mdi mdi-star"></i>
              </li>
            </ul>

            <h5 class="mt-4 py-2">توضیحات :</h5>
            <p class="text-muted">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantExplain;
