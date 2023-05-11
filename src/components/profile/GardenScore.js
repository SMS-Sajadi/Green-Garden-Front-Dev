import React from 'react';
// Icons
import product from '../../assets/icons/plantProduct.svg';
import star from '../../assets/icons/star.svg';

const GardenScore = () => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
        <div className="sidebar sticky-bar p-4 rounded shadow">
            <div className="widget">
                <h5 className="widget-title">فعالیت گلخانه :</h5>
                <div className="row mt-4">
                    <div className="col-6 text-center">
                        <img src={product} alt=''  className="text-primary mb-1"  style={{width: '40px'}}/>

                        <h5 className="mb-0">2588</h5>
                        <p className="text-muted mb-0"> تعداد محصولات</p>
                    </div>

                    <div className="col-6 text-center">
                    <img src={star} alt='' className="text-primary mb-1"  style={{width: '40px'}}/>
                        <h5 className="mb-0">454</h5>
                        <p className="text-muted mb-0">امتیاز </p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    );
};

export default GardenScore;