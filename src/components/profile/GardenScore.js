import React from 'react';
// Icons
import product from '../../assets/icons/plantProduct.svg';
import star from '../../assets/icons/star.svg';

const GardenScore = () => {
    return (
        <div class="col-lg-4 col-md-6 col-12">
        <div class="sidebar sticky-bar p-4 rounded shadow">
            <div class="widget">
                <h5 class="widget-title">فعالیت گلخانه :</h5>
                <div class="row mt-4">
                    <div class="col-6 text-center">
                        <img src={product} alt=''  class="text-primary mb-1"  style={{width: '40px'}}/>

                        <h5 class="mb-0">2588</h5>
                        <p class="text-muted mb-0"> تعداد محصولات</p>
                    </div>

                    <div class="col-6 text-center">
                    <img src={star} alt='' class="text-primary mb-1"  style={{width: '40px'}}/>
                        <h5 class="mb-0">454</h5>
                        <p class="text-muted mb-0">امتیاز </p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    );
};

export default GardenScore;