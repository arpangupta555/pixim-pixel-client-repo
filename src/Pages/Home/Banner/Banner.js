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

        // <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        //     <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        //         <img src={img1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
        //         <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img1} />
        //         <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img2} />
        //         <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img3} />
        //         <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img4} />

        //     </div>
        // </section>








        // <div className='mb-5'>
        //     <div className="carousel w-full">
        //         <div id="slide1" className="carousel-item relative w-full">
        //             <img src={img1} className="w-full h-5/6" />

        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide4" className="btn btn-circle">❮</a>
        //                 <a href="#slide2" className="btn btn-circle">❯</a>

        //             </div>
        //         </div>
        //         <div id="slide2" className="carousel-item relative w-full">
        //             <img src={img2} className="w-full h-5/6" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide1" className="btn btn-circle">❮</a>
        //                 <a href="#slide3" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide3" className="carousel-item relative w-full">
        //             <img src={img4} className="w-full h-5/6" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide2" className="btn btn-circle">❮</a>
        //                 <a href="#slide1" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    );
};

export default Banner;