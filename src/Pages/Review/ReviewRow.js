
import React, { useEffect, useState } from 'react';

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
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    orderService?.img &&
                                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceName}</div>
                            <div className="text-sm opacity-50">{customer}</div>
                        </div>
                    </div>
                </td>
                <td>

                    <span className="badge badge-ghost badge-sm">{email}</span>
                </td>
                <td>{review}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>



        </div>
    );
};

export default ReviewRow;