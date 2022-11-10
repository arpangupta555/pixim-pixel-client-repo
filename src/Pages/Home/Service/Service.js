import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
            <h1 className='text-4xl text-center'>Details About : {title}</h1>
            <div className=" mx-14 my-10 card card-side bg-base-100 shadow-xl">
                <figure><PhotoProvider>
                    <PhotoView src={image_url}>
                        <img src={image_url} alt="" />

                    </PhotoView>
                </PhotoProvider></figure>
                <div className="card-body p-10 ">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <p>Price: {price}</p>
                    <p>Duration: {duration}</p>

                </div>
            </div>



            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">I'm really happy with your determination to finish this project. I know it wasn't easy, but I knew you could do it. Your helpful attitude makes it clear that you can continue to take on new challenges and grow with the company. Thank you for your extra effort
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <p>Bappi Lahiri</p>
                    </div>
                    <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">PIXELPIXIM was the best photographer I have ever hired. On time. Followed through on everything he said he would do. Would highly recommend him to family, friends and business associates.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <p>Elon Agarwal</p>
                    </div>
                </div>
            </section>

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