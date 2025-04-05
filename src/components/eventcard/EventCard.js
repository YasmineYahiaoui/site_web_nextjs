//yasmine lynda rayane mellissa hamza redouane
import Link from "next/link";
import "../../components/eventcard/EventCard.css";

export default function EventCard({ event }) {
  return (
    <div className="event-card transition-colors duration-300 dark:bg-gray-800 dark:text-white">
      <h2 className="event-title">{event.title}</h2>
      <p className="event-category">{event.category}</p>
      <p className="event-date">📅 {event.date} - 📍 {event.location}</p>
      <p className="event-description">{event.description}</p>
      
      {/* redirige vers `/evenements/[id]` */}
      <Link href={`/evenements/${event.id}`} className="event-link dark:text-blue-300 dark:hover:text-blue-400">
        ➜ Lire l'article
      </Link>
    </div>
  );
}