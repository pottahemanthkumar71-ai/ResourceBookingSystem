import { useEffect, useState } from "react";
import API from "../api";

function BookingHistory() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    API.get("/bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));

  }, []);

  const deleteBooking = async (id) => {

    try {

      await API.delete(
        `/bookings/${id}`
      );

      setBookings(
        bookings.filter((b) => b.id !== id)
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="history-page">

      <h2 className="history-title">
        📖 Booking History
      </h2>

      <div className="history-grid">

        {bookings.map((b) => (

          <div
            className="history-card"
            key={b.id}
          >

           
<h3>
  🏢 {b.resourceName || "Booked Resource"}
</h3>

<p>
  📂 {b.category || "General Resource"}
</p>

<p>
  👤 {b.bookedBy || "User"}
</p>

<p>
  📝 {b.purpose || "No Purpose Specified"}
</p>

<p>
  📅 {b.date}
</p>

<p>
  ⏰ {b.slot}
</p>

            <button
              className="delete-btn"
              onClick={() => deleteBooking(b.id)}
            >
              🗑 Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default BookingHistory;