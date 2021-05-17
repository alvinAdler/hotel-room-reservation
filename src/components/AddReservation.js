import React from 'react'

const AddReservation = () => {
    return (
        <form className="add-reservation-form">
            <div className="form-data">
                <label htmlFor="idUserName">Full Name</label>
                <input type="text" id="idUserName" placeholder="Enter your name here" />
            </div>
            <div className="form-data">
                <label htmlFor="idCheckinDate">Check-in Date</label>
                <input type="text" id="idCheckinDate" placeholder="Enter your check-in date here" />
            </div>
            <div className="form-data">
                <label htmlFor="idCheckoutDate">Check-out Date</label>
                <input type="text" id="idCheckoutDate" placeholder="Enter your check-out date here" />
            </div>
            <div className="form-data">
                <label htmlFor="idRoomNumber">Room Number</label>
                <input type="text" id="idRoomNumber" placeholder="Enter your room number here" />
            </div>
            <button type="submit" className="add-button btn btn-primary">Submit</button>
        </form>
    )
}

export default AddReservation
