import {useState} from 'react'

import Header from './components/Header'
import RoomReservations from './components/RoomReservations'

function App() {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      customer_name: "Alvin",
      checkin_date: "April 15, 2021 - 09:00:00",
      checkout_date: "April 20, 2021 - 13:00:00",
      room_number: 201,
      open_desc: true
    },
    {
      id: 2,
      customer_name: "Alex",
      checkin_date: "May 08, 2021 - 10:00:00",
      checkout_date: "May 14, 2021 - 15:00:00",
      room_number: 309,
      open_desc: true
    },
    {
      id: 3,
      customer_name: "Adam",
      checkin_date: "June 02, 2021 - 18:00:00",
      checkout_date: "April 20, 2021 - 08:00:00",
      room_number: 409,
      open_desc: true
    },
    {
      id: 4,
      customer_name: "Arum",
      checkin_date: "December 13, 2021 - 05:00:00",
      checkout_date: "December 23, 2021 - 20:00:00",
      room_number: 807,
      open_desc: true
    },
    {
      id: 5,
      customer_name: "Ayu",
      checkin_date: "September 29, 2021 - 15:00:00",
      checkout_date: "October 5, 2021 - 08:00:00",
      room_number: 203,
      open_desc: true
    }
  ])


  return (
    <div className="App container">
      <Header/>
      <RoomReservations room_reservations = {reservations}/>
    </div>
  );
}

export default App;
