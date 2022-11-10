import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Service = () => {

    const { _id, image_url, title, price, details, duration } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {

        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregistered';
        const review = form.review.value;


        const order = {

            service: _id,
            serviceName: title,
            customer: name,
            email,
            review

        }



        fetch('http://localhost:5000/review', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    alert('Review Placed Successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }

    return (

        <div>
            <div className=" mx-14 my-10 card card-side bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="" /></figure>
                <div className="card-body p-10 ">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <p>Price: {price}</p>
                    <p>Duration: {duration}</p>

                </div>
            </div>

            <form onSubmit={handlePlaceReview}>
                <div className="grid grid-cols-1 mx-auto p-10 ">
                    <h1 className='text-4xl my-5'>Post Your Review</h1>
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs mb-3" readOnly />
                    <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs mb-3" />
                    <textarea name='review' className="textarea textarea-bordered h-24 w-full" placeholder="Your Review"></textarea>

                </div>
                <input className='btn my-3 mx-10' type="submit" value="Place Your Review" />

            </form>




        </div>
    );
};

export default Service;