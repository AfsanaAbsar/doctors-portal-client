import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';


const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP')
    const { _id, name, slots } = treatment;

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value

        }


        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(`appointment is set at ${date}, ${slot}`)
                }
                else {
                    alert('already have an appointment')
                }
                refetch();
                setTreatment(null);

            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-xl text-center  text-secondary pb-4">{name}</h3>
                    <label for="booking-modal" class="btn btn-secondary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} >
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full mb-4 " />


                        <select name='slot' class="select select-bordered w-full mb-4">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" disabled value={user?.displayName} name='name' placeholder="Your Name" class="input input-bordered w-full mb-4" />
                        <input type="email" disabled value={user?.email} name='email' placeholder="Your Email" class="input input-bordered w-full mb-4" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full mb-4" />
                        <input type="submit" value="BOOK" class="input w-full mb-4 bg-gradient-to-r from-secondary  to-primary text-white font=bold text-lg border-none" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;