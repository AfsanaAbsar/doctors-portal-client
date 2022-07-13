import React from 'react';

const ReviewDetails = ({ review }) => {
    return (
        <div class="card  shadow-xl">
            <div class="card-body items-center">

                <div>
                    <p>{review.description}</p>
                </div>
                <div class="flex items-center ">

                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-56">
                        <img src={review.img} />
                    </div>

                    <div><h2 class="card-title">{review.name}</h2>
                        <h3>{review.location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;