import React from 'react'
import {FaTimes} from 'react-icons/fa'

const ReservationCard = ({reservation_data, onDelete, onToggle}) => {
    return (
        <div className="room-card card col-md-5" onDoubleClick = {() => onToggle(reservation_data.id)}>
            <div className="card-body">
                <h5 className="card-title">{reservation_data.customer_name}</h5>
                <FaTimes style={FaTimesStyle} onClick = {() => onDelete(reservation_data.id)}/>
                <h6 className="card-subtitle mb-2 text-muted">{reservation_data.room_number}</h6>
                {reservation_data.open_desc && 
                    <div>
                        <hr />
                        <p>Check-in Date: {reservation_data.checkin_date}</p>
                        <p>Check-out Date: {reservation_data.checkout_date}</p>
                    </div>
                }
            </div>
        </div>
    )
}

const FaTimesStyle = {
    position: "absolute",
    cursor: "pointer",
    color: "#eb4034",
    top: "15px",
    right: "15px"
}

export default ReservationCard
