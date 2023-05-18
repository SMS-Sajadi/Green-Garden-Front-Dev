import React from 'react';
import { Link } from 'react-router-dom';

// Icon
import chervon from '../../assets/icons/chevron-right.svg';


const Card = ({item}) => {
    const {image, name, category} = item;
    return (
        <div class="col-lg-4 col-md-6 mt-4 pt-2">
        <div class="card work-container work-modern rounded border-0 overflow-hidden">
            <div class="card-body p-0">
                <img src={image} class="img-fluid rounded" alt=""/>
                <div class="overlay-work"></div>
                <div class="content">
                    <Link to="/" class="title text-green pb-2 border-bottom"> {name}</Link>
                    <ul class="post-meta mb-0 mt-2 text-white list-unstyled">
                        <li class="list-inline-item me-3"><i class="uil uil-bed-double me-2"></i> {category}</li>
                    </ul>
                </div>
                <div class="read_more bg-primary text-center rounded-circle">
                    <Link to="/" class="text-light d-block">
                        <img src={chervon} alt='' class="fea icon-sm title-dark"/>
                        </Link>
                </div>
            </div>
        </div>
    </div>
);
};

export default Card;