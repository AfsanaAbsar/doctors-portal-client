import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')
    const { data: services, isLoading, refetch } = useQuery('available', () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    if (isLoading) {
        return <p>loading</p>
    }
    return (
        <div>
            <h4 className='text-secondary font-bold text-2xl pb-4 text-center'>You picked {format(date, 'PP')}</h4>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 gap-12 '>
                    {
                        services?.map(service => <AppointmentCard
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></AppointmentCard>)
                    }
                </div>
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}

            </div>
        </div>
    );
};

export default AvailableAppointment;