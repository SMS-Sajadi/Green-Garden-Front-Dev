import React from "react";

const SaveCard = ({ info }) => {
  const { image, name, category } = info;

  return (
    <div class="col-lg-3 col-md-6 mt-4 pt-2">
    <div class="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
        <div class="portfolio-box-img position-relative overflow-hidden">
            <img class="item-container img-fluid mx-auto" src={image} alt="1" />
            <div class="overlay-work bg-dark"></div>
            <div class="content">
                <h5 class="mb-0"><a href="page-portfolio-detail.html" class="text-white title">{name} </a></h5>
                <h6 class="text-light tag mb-0"> {category} </h6>
            </div>
            <div class="icons text-center">
                <a href="images/personal/1.jpg" class="text-primary work-icon bg-white d-inline-block rounded-pill lightbox">
                <i data-feather="camera" class="uil uil-camera "></i>
                    </a>
            </div>
        </div>
    </div>
</div>
);
};

export default SaveCard;
