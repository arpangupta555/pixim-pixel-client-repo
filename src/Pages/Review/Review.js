
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Review = () => {
    useTitle('Review');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])




    useEffect(() => {

        fetch(`https://pixel-pixim-server.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Want to delete?')
        if (proceed) {

            fetch(`https://pixel-pixim-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        console.log(remaining)
                        setReviews(remaining);
                    }


                })

        }


    }

    return (
        <div>

            <h1 className='text-3xl text-center mt-12'>You have {reviews.length} Reviews Here </h1>
            {
                reviews.map(reviewcus => <ReviewRow
                    key={reviewcus._id}
                    reviewcus={reviewcus}
                    handleDelete={handleDelete}
                ></ReviewRow>)
            }








        </div>
    );
};

export default Review;