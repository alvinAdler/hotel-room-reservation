import React from 'react'
import ReservationCard from './ReservationCard'

const RoomReservations = ({room_reservations, onDelete, onToggle}) => {
    return (
        <div className="reservation-cards row justify-content-center">
            {room_reservations.map((room) => (
                <ReservationCard key={room.id} reservation_data={room} onDelete = {onDelete} onToggle = {onToggle}/>
            ))}
        </div>
    )
}

export default RoomReservations
