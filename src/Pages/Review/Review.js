
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Review = () => {
    useTitle('Review');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])




    useEffect(() => {

        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Want to delete?')
        if (proceed) {

            fetch(`http://localhost:5000/review/${id}`, {
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
            <h1 className='text-center text-4xl'> You Have {reviews.length} Reviews</h1>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Your Review</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(reviewcus => <ReviewRow
                                key={reviewcus._id}
                                reviewcus={reviewcus}
                                handleDelete={handleDelete}
                            ></ReviewRow>)
                        }



                    </tbody>



                </table>
            </div>



        </div>
    );
};

export default Review;