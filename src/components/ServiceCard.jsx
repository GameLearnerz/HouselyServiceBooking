function ServiceCard({ service, onSelect }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px"
    }}>
      <h3>{service.name}</h3>
      <div className="card"></div>
      <button onClick={() => onSelect(service)}>
        Book Service
      </button>
    </div>
  );
}

export default ServiceCard;