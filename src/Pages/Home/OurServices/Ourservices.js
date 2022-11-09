import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
import Servicesingle from './Servicesingle';

const Ourservices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))



    }, [])

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl my-8 text-black'>Our <span className='text-amber-500'>Services</span>    </h1> </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 ml-5'>

                {

                    services.map(service => <Servicesingle
                        key={service._id}
                        service={service}

                    ></Servicesingle>)

                }
            </div>
            <div className="card-actions justify-end mx-5 my-5">


            </div>

        </div>



    );
};

export default Ourservices;