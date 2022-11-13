import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('https://pixel-pixim-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))



    }, [])

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl my-8 text-black'>Our <span className='text-amber-500'>Services</span>    </h1> </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 ml-5'>

                {

                    services.slice(0, 3).map(service => <ServiceCard
                        key={service._id}
                        service={service}

                    ></ServiceCard>)

                }
            </div>
            <div className="card-actions justify-end mx-5 my-5">

                <Link to='/ourservices'> <button className="btn btn-danger">See More </button> </Link>

            </div>

        </div>



    );
};

export default Services;