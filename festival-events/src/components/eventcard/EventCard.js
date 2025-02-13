import Link from "next/link";
import "../../components/eventcard/EventCard.css";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-info">
        <h2>{event.title}</h2>
        <p className="event-category">{event.category}</p>
        <p className="event-date">📅 {event.date} - 📍 {event.location}</p>
        <p className="event-description">{event.description}</p>
        <Link href={`/evenements/${event.id}`} className="event-link">➜ Voir plus</Link>
      </div>
    </div>
  );
}
