import {useState} from 'react'
import AddReservation from './components/AddReservation'

import Header from './components/Header'
import RoomReservations from './components/RoomReservations'
import EmptyBanner from './components/EmptyBanner'

function App() {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      customer_name: "Alvin",
      checkin_date: "April 15, 2021 - 09:00:00",
      checkout_date: "April 20, 2021 - 13:00:00",
      room_number: 201,
      open_desc: false
    },
    {
      id: 2,
      customer_name: "Alex",
      checkin_date: "May 08, 2021 - 10:00:00",
      checkout_date: "May 14, 2021 - 15:00:00",
      room_number: 309,
      open_desc: false
    },
    {
      id: 3,
      customer_name: "Adam",
      checkin_date: "June 02, 2021 - 18:00:00",
      checkout_date: "April 20, 2021 - 08:00:00",
      room_number: 409,
      open_desc: false
    },
    {
      id: 4,
      customer_name: "Arum",
      checkin_date: "December 13, 2021 - 05:00:00",
      checkout_date: "December 23, 2021 - 20:00:00",
      room_number: 807,
      open_desc: false
    },
    {
      id: 5,
      customer_name: "Ayu",
      checkin_date: "September 29, 2021 - 15:00:00",
      checkout_date: "October 5, 2021 - 08:00:00",
      room_number: 203,
      open_desc: false
    }
  ])

  const [toggleAdd, setToggleAdd] = useState(false)

  //Delete Reservation
  const delete_reserv = (id) => {
    setReservations(reservations.filter((reservation) => (
      reservation.id !== id
    )))
  }

  //Submit Reservation
  const submit_reserv = (reservation) => {
    setReservations([...reservations, reservation])
  }

  //Toggle reservation card
  const toggle_reserv_card = (id) => {
    setReservations(reservations.map((reservation) => (reservation.id === id ? 
      {...reservation, open_desc:!reservation.open_desc} : 
      reservation
    )
    ))
  }

  //Toggle add form
  const toggle_add_form = () => {
    setToggleAdd(!toggleAdd)
  }


  return (
    <div className="App container">
      <Header onFormToggle = {toggle_add_form} showAddForm = {toggleAdd}/>
      {toggleAdd &&
      <AddReservation onSubmit = {submit_reserv} />  
      }

      {reservations.length > 0 ? 
        <RoomReservations room_reservations = {reservations} onDelete = {delete_reserv} onToggle = {toggle_reserv_card}/> : 
        <EmptyBanner/>
      }
    </div>
  );
}

export default App;
