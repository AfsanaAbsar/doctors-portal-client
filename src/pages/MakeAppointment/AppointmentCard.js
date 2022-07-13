import React from 'react';

const AppointmentCard = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96  shadow-lg">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <p>{slots.length
                    ?
                    <span>Starts From : {slots[0]}</span>
                    :
                    <span className='text-red-600'>Try Another Day</span>
                }
                </p>
                <div class="card-actions justify-end">

                    <label disabled={slots.length === 0}
                        onClick={() => setTreatment(service)} for="booking-modal" class="btn modal-button bg-gradient-to-r from-secondary  to-primary text-white border-none shadow-lg">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;