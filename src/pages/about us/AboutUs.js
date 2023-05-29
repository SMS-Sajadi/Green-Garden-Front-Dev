import React from 'react';
import bg from '../../assets/images/salesman.jpg'
const AboutUs = () => {
    return (
                            <section class="bg-half-260 d-table w-100 background2" data-jarallax='{"speed": 0.5}' >
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="title-heading">
                            <div class="alert alert-white alert-pills shadow" role="alert">
                                <span class="badge rounded-pill bg-primary me-1">مورد اعتماد </span>
                                <span class="content"> جستجوی بهترین شرکت ها مورد تایید </span>
                            </div>
                            {/* <h1 class="heading fw-bold mb-3">کم حال شما برا ساخت انواع سایت  <span class="text-primary text-decoration-underline typewrite" data-period="2000" data-type='[ "آژانسی", "شرکتی", "استارت آپ", "فروشگاهی" ]'> <span class="wrap"></span> </span>  رشد تا سطح بالا</h1> */}
                            <p class="para-desc text-muted">کمپین خود را راه اندازی کنید و از تخصص ما در زمینه طراحی و مدیریت صفحه بوت استرپ v5 html تبدیل محور بهره مند شوید.</p>
                            <div class="mt-4 pt-2">
                                <a href="javascript:void(0)" class="btn btn-primary">تماس با ما</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

    );
};

export default AboutUs;