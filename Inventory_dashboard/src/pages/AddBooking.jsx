import { useState } from "react";
import API from "../api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddBooking() {

  const [booking, setBooking] = useState({
    category: "",
    resourceName: "",
    bookedBy: "",
    purpose: "",
    date: "",
    startTime: "",
    endTime: ""
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const saveBooking = async () => {

    try {

      const res = await API.get("/bookings");

      const existingBookings = res.data;

      const conflict = existingBookings.find(
        (b) =>
          b.resourceName === booking.resourceName &&
          b.date === booking.date &&
          b.slot === `${booking.startTime} - ${booking.endTime}`
      );

      if (conflict) {

        setPopupMessage(
          `⚠️ ${booking.resourceName} is already booked on ${booking.date}`
        );

        setShowPopup(true);

        return;
      }

      const bookingData = {
        category: booking.category,
        resourceName: booking.resourceName,
        bookedBy: booking.bookedBy,
        purpose: booking.purpose,
        date: booking.date,
        slot: `${booking.startTime} - ${booking.endTime}`
      };

      await API.post("/bookings", bookingData);

      setPopupMessage("Booking Added Successfully ✅");
      setShowPopup(true);

      setBooking({
        category: "",
        resourceName: "",
        bookedBy: "",
        purpose: "",
        date: "",
        startTime: "",
        endTime: ""
      });

      setSelectedDate(null);
      setStartTime(null);
      setEndTime(null);

    } catch (error) {

      setPopupMessage("Booking Failed ❌");
      setShowPopup(true);

      console.log(error);

    }
  };

  return (

    <div className="booking-page">

      <div className="booking-form">

        <h2>📅 Book Resource</h2>

        <label className="time-label">
          Category
        </label>

        <select
          value={booking.category}
          onChange={(e) =>
            setBooking({
              ...booking,
              category: e.target.value
            })
          }
        >
          <option value="">
            Select Category
          </option>

          <option value="Room">
            Room
          </option>

          <option value="Lab">
            Lab
          </option>

          <option value="Equipment">
            Equipment
          </option>

          <option value="Hall">
            Hall
          </option>

        </select>

        <label className="time-label">
          Resource
        </label>

        <select
          value={booking.resourceName}
          onChange={(e) =>
            setBooking({
              ...booking,
              resourceName: e.target.value
            })
          }
        >
          <option value="">
            Select Resource
          </option>

          <option value="Meeting Room A">
            Meeting Room A
          </option>

          <option value="Meeting Room B">
            Meeting Room B
          </option>

          <option value="Conference Room">
            Conference Room
          </option>

          <option value="Computer Lab">
            Computer Lab
          </option>

          <option value="AI Research Lab">
            AI Research Lab
          </option>

          <option value="Projector">
            Projector
          </option>

          <option value="3D Printer">
            3D Printer
          </option>

          <option value="Seminar Hall">
            Seminar Hall
          </option>

        </select>

        <label className="time-label">
          Booked By
        </label>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={booking.bookedBy}
          onChange={(e) =>
            setBooking({
              ...booking,
              bookedBy: e.target.value
            })
          }
        />

        <label className="time-label">
          Purpose
        </label>

        <textarea
          className="purpose-box"
          placeholder="Enter Booking Purpose"
          value={booking.purpose}
          onChange={(e) =>
            setBooking({
              ...booking,
              purpose: e.target.value
            })
          }
        />

        <label className="time-label">
          Booking Date
        </label>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => {

            setSelectedDate(date);

            setBooking({
              ...booking,
              date: date.toISOString().split("T")[0]
            });

          }}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select Booking Date"
          className="custom-datepicker"
        />

        <label className="time-label">
          Start Time
        </label>

        <DatePicker
          selected={startTime}
          onChange={(time) => {

            setStartTime(time);

            setBooking({
              ...booking,
              startTime: time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            });

          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          dateFormat="h:mm aa"
          placeholderText="Select Start Time"
          className="custom-datepicker"
        />

        <label className="time-label">
          End Time
        </label>

        <DatePicker
          selected={endTime}
          onChange={(time) => {

            setEndTime(time);

            setBooking({
              ...booking,
              endTime: time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            });

          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          dateFormat="h:mm aa"
          placeholderText="Select End Time"
          className="custom-datepicker"
        />

        <button onClick={saveBooking}>
          Book Resource
        </button>

      </div>

      {showPopup && (

        <div className="popup-overlay">

          <div className="popup-box">

            <div className="popup-icon">

              {popupMessage.includes("Successfully")
                ? "✅"
                : popupMessage.includes("already booked")
                ? "⚠️"
                : "❌"}

            </div>

            <h3>Notification</h3>

            <p>{popupMessage}</p>

            <button
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>

          </div>

        </div>

      )}

    </div>

  );
}

export default AddBooking;