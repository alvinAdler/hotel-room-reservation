import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AddReservation from './components/AddReservation'
import Header from './components/Header'
import RoomReservations from './components/RoomReservations'
import EmptyBanner from './components/EmptyBanner'
import Navbar from './components/Navbar'
import AboutPage from './components/AboutPage'

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
  const delete_reserv = async (id) => {
    await fetch(`http://localhost:5000/reservations/${id}`, {
      method: "DELETE"
    })

    setReservations(reservations.filter((reservation) => (
      reservation.id !== id
    )))
  }

  //Submit Reservation
  const submit_reserv = async (reservation) => {
    const res = await fetch(`http://localhost:5000/reservations`, {
      method: "POST", 
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(reservation)
    })

    const data = await res.json()

    setReservations([...reservations, data])
  }

  //Toggle reservation card
  const toggle_reserv_card = async (id) => {
    const res = await fetch(`http://localhost:5000/reservations/${id}`)
    const data = await res.json()

    const updated_data = {...data, open_desc: !data.open_desc}

    const send_data = await fetch(`http://localhost:5000/reservations/${id}`, {
      method: "PUT", 
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updated_data)
    })

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
    <Router>
      <div className="App">
        <Navbar/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/" exact render={(props) => (
          <>
            <div className="container" style={{marginTop: "15px"}}>
              <Header onFormToggle = {toggle_add_form} showAddForm = {toggleAdd}/>
              {toggleAdd &&
              <AddReservation onSubmit = {submit_reserv} />  
              }

              {reservations.length > 0 ? 
                <RoomReservations room_reservations = {reservations} onDelete = {delete_reserv} onToggle = {toggle_reserv_card}/> : 
                <EmptyBanner/>
              }
            </div>
          </>
        )}/>
      </div>
    </Router>
  );
}

export default App;
