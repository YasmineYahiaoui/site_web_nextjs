"use client";

import Link from "next/link";
import "../../components/featuredevents/FeaturedEvents.css";

const events = [
  {
    id: 1,
    category: "🎨 Ateliers d'art",
    title: "Peinture et sculpture en direct",
    date: "10 mars 2025",
    backgroundColor: "#F4A896",
    link: "/evenements#atelier-art"
  },
  {
    id: 2,
    category: "🎭 Théâtre et Impro",
    title: "Spectacle en plein air",
    date: "15 avril 2025",
    backgroundColor: "#6B7FD7",
    link: "/evenements#theatre"
  },
  {
    id: 3,
    category: "🎬 Projections de films",
    title: "Débat autour du cinéma indépendant",
    date: "20 mai 2025",
    backgroundColor: "#FBC02D",
    link: "/evenements#films"
  }
];

export default function FeaturedEvents() {
  return (
    <section className="featured-events">
      {events.map(event => (
        <div key={event.id} className="event-card" style={{ backgroundColor: event.backgroundColor }}>
          <div className="event-content">
            <span className="event-category">{event.category}</span>
            <h2 className="event-title">{event.title}</h2>
          </div>
          <div className="event-footer">
            <p className="event-date">{event.date}</p>
            <Link href={`/evenements/${event.id}`} className="event-link">
              ➜ Lire l'article
            </Link>

          </div>
        </div>
      ))}
    </section>
  );
}
