//yasmine lynda rayane mellissa hamza redouane
import Link from "next/link";
import "../../components/eventcard/EventCard.css";

export default function EventCard({ event }) {
  return (
    <div className="event-card" style={{ backgroundColor: event.backgroundColor }}>
      <h2>{event.title}</h2>
      <p className="event-category">{event.category}</p>
      <p className="event-date">📅 {event.date} - 📍 {event.location}</p>
      <p className="event-description">{event.description}</p>
      
      {/* redirige vers `/evenements/[id]` */}
      <Link href={`/evenements/${event.id}`} className="event-link">
        ➜ Lire l’article
      </Link>
    </div>
  );
}