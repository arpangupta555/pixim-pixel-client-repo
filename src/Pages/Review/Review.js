import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Review = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({})




    useEffect(() => {

        fetch(`http://localhost:5000/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])

    return (
        <div>
            <h1 className='text-center text-4xl'> You Have {reviews.length} Reviews</h1>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Your Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(reviewcus => <ReviewRow
                                key={reviewcus._id}
                                reviewcus={reviewcus}
                            ></ReviewRow>)
                        }



                    </tbody>



                </table>
            </div>



        </div>
    );
};

export default Review;