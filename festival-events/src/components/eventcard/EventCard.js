export default function EventCard({ event }) {
    return (
      <div className="event-card">
        <h2>{event.title}</h2>
        <p>Date: {event.date}</p>
        <p>Lieu: {event.location}</p>
      </div>
    );
  }
  