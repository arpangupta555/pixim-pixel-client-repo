import React from 'react';
import useTitle from '../../../hooks/useTitle';

import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import Services from '../Services/Services';



const Home = () => {

    useTitle('PixelPixim-Home');
    return (
        <div>

            <Section></Section>
            <Services></Services>
            <Banner></Banner>

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                                <h3 className="text-3xl font-semibold">ABOUT US</h3>

                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">PIXELPIXIM is created to simplify the search process so clients can use the powerful but simple interface to browse by location, budget, & category. Built in features allow you to review portfolios, get in touch, compare prices. </h3>

                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">From engagements to weddings to kids’ birthdays, graduation ceremonies, corporate events, editorial to advertising work, wildlife to product photography, discover and connect with photographers best suited for your needs.</h3>

                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">The Professional Photographer's Directory comes to you from PIXELPIXIM, Bangladesh's first & largest online photography platform.</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;