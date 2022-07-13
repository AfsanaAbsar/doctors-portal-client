import React from 'react';
import About from '../About/About';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import Reviews from '../Reviews/Reviews';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <About></About>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </>

    );
};

export default Home;