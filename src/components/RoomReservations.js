import React from 'react'
import ReservationCard from './ReservationCard'

const RoomReservations = ({room_reservations}) => {
    return (
        <div className="reservation-cards row justify-content-center">
            {room_reservations.map((room) => (
                <ReservationCard reservation_data={room} />
            ))}
        </div>
    )
}

export default RoomReservations
