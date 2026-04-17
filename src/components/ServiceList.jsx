import ServiceCard from "./ServiceCard";

function ServiceList({ services, onSelect }) {
  return (
    <div>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default ServiceList;