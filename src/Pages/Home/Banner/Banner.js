import React from 'react';
import img1 from '../../../assts/img/pic-1.jpg'
import img2 from '../../../assts/img/pic-2.jpg'
import img3 from '../../../assts/img/pic-3.jpg'
import img4 from '../../../assts/img/pic-4.jpg'

const Banner = () => {
    return (



        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <h1 className='text-5xl text-center my-3  text-white'>GAL<span className='text-amber-500'>LERY</span> </h1>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />

            </div>
        </section>











    );
};

export default Banner;