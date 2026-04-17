import { useState, useRef, useEffect } from "react";

function BookingForm({ service, onBook, onCancel }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const nameRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !date) {
      alert("Fill all fields");
      return;
    }

    onBook({
      serviceId: service.id,
      serviceName: service.name,
      name,
      date
    });

    setName("");
    setDate("");
  };

  const handleNameKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (name.trim()) {
        dateRef.current.focus();
        dateRef.current.showPicker?.();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onCancel();
    }
  };

  const handleDateKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (date) handleSubmit(e);
    } else if (e.key === "Escape") {
      e.preventDefault();
      nameRef.current.focus();
    }
  };

  return (
    <div>
      <h3>Book {service.name}</h3>

      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleNameKey}
        />

        <input
          ref={dateRef}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onKeyDown={handleDateKey}
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;