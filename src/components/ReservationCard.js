import React from 'react'

const ReservationCard = ({reservation_data}) => {
    return (
        <div className="room-card card col-md-5">
            <div className="card-body">
                <h5 className="card-title">{reservation_data.customer_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{reservation_data.room_number}</h6>
                <div>
                    <hr />
                    <p>Check-in Date: {reservation_data.checkin_date}</p>
                    <p>Check-out Date: {reservation_data.checkout_date}</p>
                </div>
            </div>
        </div>
    )
}

export default ReservationCard
