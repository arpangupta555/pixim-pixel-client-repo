import React from 'react';
import { Link } from 'react-router-dom';

const Section = () => {
    return (
        <div className='text-center p-auto'>



            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/WkGvBRV/WEDDING-PHOTO-10.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className='text-5xl  text-white'>PIXEL<span className='text-amber-500'>PIXIM</span>   <h1 className='text-2xl font-bold text-white'><br /> For remembering your lovely moments with one click and capturing, <br /> Dream PhotoShoot BD helps you after do this. <br />
                            Their photography team is a very experienced, trained, <br /> and dedicated person whore ready to accept any manner of challenge.</h1> </h1>


                        <Link to='/ourservices'> <button className="btn btn-primary mt-4">Get Started</button></Link>
                    </div>
                </div>
            </div>







        </div >
    );
};

export default Section;