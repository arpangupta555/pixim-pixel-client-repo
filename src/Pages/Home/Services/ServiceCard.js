import React from 'react';

const ServiceCard = ({ service }) => {

    const { image_url, title, price } = service;
    console.log(service)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price} </p>

            </div>

        </div>


    );
};

export default ServiceCard;