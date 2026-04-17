import { useState } from "react";
import ServiceList from "./components/ServiceList";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import "./App.css";

function App() {

  const [services] = useState([
    { id: 1, name: "Wall Painting Services" },
    { id: 2, name: "Electrical Services" },
    { id: 3, name: "House Plumbing Services" }
  ]);

  const [bookings, setBookings] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [message, setMessage] = useState(""); 

 const handleSelectService = (service) => {
  console.log("Clicked:", service);
  setSelectedService(service);
};


const handleCancelBooking = (index) => {
  setBookings(bookings.filter((_, i) => i !== index));
};

 
 const handleBooking = (newBooking) => {
  const exists = bookings.some(
    (b) =>
      b.serviceId === newBooking.serviceId &&
      b.date === newBooking.date &&
      b.name.toLowerCase() === newBooking.name.toLowerCase()
  );

  if (exists) {
    setMessage("Duplicate booking not allowed");

    setTimeout(() => {
      setMessage("");
    }, 2000);

    return;
  }

  setBookings([...bookings, newBooking]);
  setSelectedService(null);

  setMessage("Booking successful!");

  setTimeout(() => {
    setMessage("");
  }, 2000);
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Service Booking Platform</h1>

      
      {message && (
        <p style={{ color: "green" }}>
          {message}
        </p>
      )}

      <ServiceList
        services={services}
        onSelect={handleSelectService}
      />

      {selectedService && (
  <div
    className="modal-overlay"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()}
    >
      <BookingForm
        service={selectedService}
        onBook={handleBooking}
        onCancel={() => setSelectedService(null)}
/>

      <button
        className="close-btn"
        onClick={() => setSelectedService(null)}
      >
        ✕
      </button>
    </div>
  </div>
)}
      <BookingList
        bookings={bookings}
        onCancel={handleCancelBooking}
      />
      <div className="app"></div>
      <p className="message">{message}</p>
      
    </div>
    
  );
}

export default App;
//#endregion