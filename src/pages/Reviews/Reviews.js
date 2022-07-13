import React from 'react';
import appointmenticon from '../../assets/icons/quote.svg'
import person1 from '../../assets/images/people1.png'
import person2 from '../../assets/images/people2.png'
import person3 from '../../assets/images/people3.png'
import ReviewDetails from './ReviewDetails/ReviewDetails';
const Reviews = () => {
    const reviews = [
        {
            "_id": "01",
            "img": `${person1}`,
            "name": "Wilson Henry",
            "description": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "location": "California"
        },
        {
            "_id": "02",
            "img": `${person2}`,
            "name": "Wilson Henry",
            "description": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "location": "California"
        },
        {
            "_id": "03",
            "img": `${person3}`,
            "name": "Wilson Henry",
            "description": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "location": "California"
        },
    ]
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-secondary text-2xl pb-4'>Testimonial</h4>
                    <h2 className=' text-3xl pb-4'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={appointmenticon} alt="" />
                </div>
            </div>
            <div className='flex justify-center mb-24'>
                <div className='grid grid-cols-3 gap-12'>
                    {
                        reviews.map(review => <ReviewDetails

                            review={review}

                        ></ReviewDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;