import { useEffect,useState } from "react";
import API from "../api";

function ManageBookings(){

  const [bookings,setBookings] = useState([]);

  useEffect(()=>{

    API.get("/bookings")
    .then((res)=>setBookings(res.data));

  },[]);

  const deleteBooking = async(id)=>{

    await API.delete(`/bookings/${id}`);

    setBookings(
      bookings.filter((b)=>b.id!==id)
    );
  };

  return(

    <div className="history-page">

      <h2>📅 Manage Bookings</h2>

      {bookings.map((b)=>(

        <div
          className="history-card"
          key={b.id}
        >

          <h3>{b.resourceName}</h3>

          <p>{b.bookedBy}</p>

          <p>{b.date}</p>

          <button
            className="delete-btn"
            onClick={()=>
              deleteBooking(b.id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );
}

export default ManageBookings;