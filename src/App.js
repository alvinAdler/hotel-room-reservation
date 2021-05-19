import {useState, useEffect} from 'react'
import AddReservation from './components/AddReservation'

import Header from './components/Header'
import RoomReservations from './components/RoomReservations'
import EmptyBanner from './components/EmptyBanner'

function App() {
  //States
  const [reservations, setReservations] = useState([
  
  ])

  const [toggleAdd, setToggleAdd] = useState(false)

  //Effects
  useEffect(() => {
    const get_reservations = async () => {
      const fetched_reservations = await fetch_reserv()
      setReservations(fetched_reservations)
    }

    get_reservations()
  }, [])

  //Fetching resrevations data from the server
  const fetch_reserv = async () => {
    const res = await fetch("http://localhost:5000/reservations")
    const data = await res.json()

    return data
  }

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
