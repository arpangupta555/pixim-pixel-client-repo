import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Servicesingle = ({ service }) => {
    const { _id, image_url, title, price, details } = service;
    console.log(service)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">



            <PhotoProvider>
                <PhotoView src={image_url}>
                    <img src={image_url} alt="" />

                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price} </p>
                <p>Price: {details.slice(0, 80) + '...'} </p>
                <div className="card-actions justify-end">

                    <Link to={`/service/${_id}`}><button className="btn btn-primary">Details</button></Link>

                </div>
            </div>

        </div>


    );
};

export default Servicesingle;