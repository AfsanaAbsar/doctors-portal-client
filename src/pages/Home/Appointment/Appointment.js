import React from 'react';
import doctorimg from '../../../assets/images/doctor.png'
const Appointment = () => {
    return (
        <div className="flex items-center bg-[url('/src/assets/images/appointment.png')] ">
            <div className=''>
                <img className='mt-[-200px]' src={doctorimg} alt="" />
            </div>
            <div className='w-1/2 mr-36'>
                <h4 className='text-secondary text-2xl pb-4'>Appointment</h4>
                <h2 className='text-white text-3xl pb-4'>Make an appointment Today</h2>
                <p className='text-white pb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn bg-gradient-to-r from-secondary  to-primary text-white border-none shadow-lg">Get Started</button>
            </div>
        </div>
    );
};

export default Appointment;