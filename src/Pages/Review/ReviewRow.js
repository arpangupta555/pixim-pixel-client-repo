
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ reviewcus, handleDelete }) => {


    const { serviceName, customer, email, review, service, _id } = reviewcus;
    console.log(_id)

    const [orderService, setOrderServices] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderServices(data));



    }, [service])







    return (
        <div>


            <section className="my-8">




                <div className="container grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 ">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="font-bold">Review On: {serviceName}</div>
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">{review}
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>



                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <div>

                            <div className="text-xl ">Reviewed by: {customer}</div>
                            <div className="text-xl">Email: {email}</div>
                        </div>
                        <label className='mt-5'>
                            <Link > <button onClick={() => handleDelete(_id)} className="btn btn-danger mt-2">Delete the review </button> </Link>
                            <Link> <button className="btn btn-danger mt-2">Update the review </button> </Link>


                        </label>
                    </div>

                </div>
            </section >








        </div >
    );
};

export default ReviewRow;