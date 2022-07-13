import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-[url('/src/assets/images/appointment.png')] flex justify-center ">
            <div className='w-96 py-12'>
                <h4 className='text-secondary text-2xl pb-4 text-center'>Contact Us</h4>
                <h2 className='text-white text-3xl pb-4 text-center'>Stay Connected With US</h2>
                <div>
                    <input type="text" placeholder="Email" class="input w-full mb-4 " />

                    <input type="text" placeholder="Subject" class="input w-full mb-4" />
                    <textarea class="textarea  w-full mb-4" placeholder="our Message"></textarea>
                    <div className='flex justify-center'>  <button class="btn bg-gradient-to-r from-secondary  to-primary text-white border-none shadow-lg">Submit</button></div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;