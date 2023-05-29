import React from 'react';
import { Link } from 'react-router-dom';

// Icon
import chervon from '../../assets/icons/chevron-right.svg';


const Card = ({item}) => {
    const {plant_img, name, type, plant_id} = item;
    return (
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
        <div className="card work-container work-modern rounded border-0 overflow-hidden">
            <div className="card-body p-0">
                <img src={plant_img} className="img-fluid rounded" alt=""/>
                <div className="overlay-work"></div>
                <div className="content">
                    <Link to="/" className="title text-green pb-2 border-bottom"> {name}</Link>
                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                        <li className="list-inline-item me-3"><i className="uil uil-bed-double me-2"></i> {type}</li>
                    </ul>
                </div>
                <div className="read_more bg-primary text-center rounded-circle">
                    <Link to={`plant-detail/${plant_id}/`} className="text-light d-block">
                        <img src={chervon} alt='' className="fea icon-sm title-dark"/>
                        </Link>
                </div>
            </div>
        </div>
    </div>
);
};

export default Card;