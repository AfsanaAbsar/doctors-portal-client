import React from 'react';
import info1 from '../../../assets/icons/clock.svg'
import info2 from '../../../assets/icons/marker.svg'
import info3 from '../../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid gap-4 grid-cols-3 px-20'>
            <div class=" p-10 card card-side bg-gradient-to-r from-secondary  to-primary shadow-xl text-white">
                <figure><img src={info1} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
            <div class="p-10 card card-side bg-accent shadow-xl text-white">
                <figure><img src={info2} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Visit Us</h2>
                    <p>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
            <div class="p-10 card card-side bg-gradient-to-r from-secondary  to-primary shadow-xl text-white">
                <figure><img src={info3} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Contact Us</h2>
                    <p>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
        </div>
    );
};

export default Info;