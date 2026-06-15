function BookingCard({ booking, onDelete }) {
  return (
    <div className="booking-card">
      <h3>{booking.resourceName}</h3>
      <p>Date: {booking.date}</p>
      <p>Slot: {booking.slot}</p>

      <button onClick={() => onDelete(booking.id)}>
        Cancel Booking
      </button>
    </div>
  );
}

export default BookingCard;