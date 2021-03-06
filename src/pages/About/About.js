import React from 'react';
import aboutImg from '../../assets/images/treatment.png'
const About = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={aboutImg} class="w-96 rounded-lg shadow-2xl" />
                <div className='w-1/2 ml-24'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn bg-gradient-to-r from-secondary  to-primary text-white border-none shadow-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;