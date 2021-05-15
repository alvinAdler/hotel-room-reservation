import React from 'react'

const RoomReservations = ({room_reservations}) => {
    return (
        <div className="reservation-cards">
            {room_reservations.map((room) => (
                <div>
                    <h2>{room.customer_name}</h2>
                    <h3>{room.room_number}</h3>
                </div>
            ))}
        </div>
    )
}

export default RoomReservations
