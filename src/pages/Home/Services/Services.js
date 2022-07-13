import React from 'react';
import Service from '../Service/Service';
import service1 from '../../../assets/images/fluoride.png'
import service2 from '../../../assets/images/cavity.png'
import service3 from '../../../assets/images/whitening.png'
const Services = () => {
    const services = [
        {
            "_id": " 01",
            "name": "Fluoride Treatment",
            "img": `${service1}`,
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, voluptatem"
        },
        {
            "_id": " 02",
            "name": "Cavity Filling",
            "img": `${service2}`,
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, voluptatem"
        },
        {
            "_id": " 03",
            "name": "Teeth Whitening",
            "img": `${service3}`,
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, voluptatem"
        },
    ]
    return (

        <div>
            <h4 className='text-center text-secondary font-bold mt-24'>OUR SERVICES</h4>
            <h1 className='text-center text-2xl mt-6'>Services We Provide</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 gap-2 mt-16'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;