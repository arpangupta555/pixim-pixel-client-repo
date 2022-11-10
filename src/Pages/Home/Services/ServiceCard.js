import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { image_url, title, price } = service;
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

            </div>

        </div>


    );
};

export default ServiceCard;