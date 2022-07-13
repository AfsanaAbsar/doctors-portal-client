import React from 'react';
import bannerImg from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <div class="hero min-h-screen bg-[url('/src/assets/images/bg.png')] ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} class="w-1/2 ml-16 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;