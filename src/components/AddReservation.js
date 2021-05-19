import React from 'react'
import {useState} from 'react'

const AddReservation = ({onSubmit}) => {
    const [username, setUsername] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [roomNumber, setRoomNumber] = useState(0)
    const [openDesc, setOpenDesc] = useState(true)

    const submitReservation = (e) => {
        e.preventDefault()

        if(username === '' || checkInDate === '' || checkOutDate === '' || roomNumber === ''){
            alert("Please fill all data")
            return
        }

        const id = Math.floor(Math.random() * 1000)

        const reservation_data = {
            id: id,
            customer_name: username,
            checkin_date: checkInDate,
            checkout_date: checkOutDate,
            room_number: roomNumber,
            open_desc: openDesc
        }

        onSubmit(reservation_data)
    }

    return (
        <form className="add-reservation-form" onSubmit = {submitReservation}>
            <div className="form-data">
                <label htmlFor="idUserName">Full Name</label>
                <input type="text" id="idUserName" placeholder="Enter your name here" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-data">
                <label htmlFor="idCheckinDate">Check-in Date</label>
                <input type="text" id="idCheckinDate" placeholder="Enter your check-in date here" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)}/>
            </div>
            <div className="form-data">
                <label htmlFor="idCheckoutDate">Check-out Date</label>
                <input type="text" id="idCheckoutDate" placeholder="Enter your check-out date here" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)}/>
            </div>
            <div className="form-data">
                <label htmlFor="idRoomNumber">Room Number</label>
                <input type="text" id="idRoomNumber" placeholder="Enter your room number here" value = {roomNumber} onChange={(e) => setRoomNumber(e.target.value)}/>
            </div>
            <button type="submit" className="add-button btn btn-primary">Submit</button>
        </form>
    )
}

export default AddReservation
