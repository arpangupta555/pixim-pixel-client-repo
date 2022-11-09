import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {

    const { image_url, title, price, details, duration } = useLoaderData();

    return (
        <div className=" mx-14 my-10 card card-side bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Movie" /></figure>
            <div className="card-body p-10 ">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <p>Price: {price}</p>
                <p>Duration: {duration}</p>

            </div>
        </div>
    );
};

export default Service;