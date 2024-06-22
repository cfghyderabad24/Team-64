function Event({ item }) {
  return (
    <div className="event-card">
      <img
        src={`http://localhost:7500/events/img/${item.title}`}
        alt={item.title}
        className="event-card-image"
      />
      <div className="event-card-content">
        <h2 className="event-card-title">{item.title}</h2>
        <p className="event-card-date">{item.date}</p>
        <p className="event-card-description">{item.description}</p>
      </div>
    </div>
  );
}

export default Event;
