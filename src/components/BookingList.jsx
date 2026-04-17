function BookingList({ bookings, onCancel }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((b, index) => (
          <div key={index} className="booking-item">
            <p><strong>Name:</strong> {b.name}</p>
            <p><strong>Service:</strong> {b.serviceName}</p>
            <p><strong>Date:</strong> {b.date}</p>

            <button
              onClick={() => {
                if (confirm("Cancel this booking?")) {
                  onCancel(index);
                }
              }}
            >
              Cancel Booking
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default BookingList;