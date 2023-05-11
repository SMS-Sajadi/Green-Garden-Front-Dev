import React from 'react';

const Product = () => {
    return (
        <div class="row">
        <div class="col-md-6 mt-4 pt-2">
            <div class="card blog rounded border-0 shadow">
                <div class="position-relative">
                    <img src="images/blog/01.jpg" class="card-img-top rounded-top" alt="..."/>
                <div class="overlay rounded-top bg-dark"></div>
                </div>
                <div class="card-body content">
                    <h5><a href="javascript:void(0)" class="card-title title text-dark">برنامه های خود را به روش خود طراحی کنید</a></h5>
                    <div class="post-meta d-flex justify-content-between mt-3">
                <div></div>
                <a href="page-blog-detail.html" class="text-muted readmore">جزئیات گل<i class="uil uil-angle-left-b align-middle"></i></a>
            </div>
        </div>
        <div class="author">
            <small class="text-light user d-block"><i class="uil uil-user"></i> کالوین لورس</small>
            <small class="text-light date"><i class="uil uil-calendar-alt"></i> اردیبهشت 1400</small>
        </div>
            </div>
        </div>
        

        <div class="col-12 mt-4 pt-2">
            <a href="page-blog-grid.html" class="btn btn-primary">نمایش بیشتر <i class="uil uil-angle-left-b align-middle"></i></a>
        </div>
    </div>
);
};

export default Product;