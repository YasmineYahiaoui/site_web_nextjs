import Navbar from "../../components/navbar/Navbar";
import EventCard from "../../components/eventcard/EventCard";


const events = [
  {
    id: 1,
    title: "Peinture et sculpture en direct",
    category: "🎨 Ateliers d'art",
    date: "10 mars 2025",
    location: "Paris",
    description: "Participez à une expérience unique de peinture et de sculpture en direct.",
    image: "/images/atelier-art.jpg"
  },
  {
    id: 2,
    title: "Spectacle en plein air",
    category: "🎭 Théâtre et Impro",
    date: "15 avril 2025",
    location: "Lyon",
    description: "Une pièce de théâtre interactive en plein air avec improvisation.",
    image: "/images/theatre.jpg"
  },
  {
    id: 3,
    title: "Débat autour du cinéma indépendant",
    category: "🎬 Projections de films",
    date: "20 mai 2025",
    location: "Marseille",
    description: "Un débat autour du cinéma indépendant avec des réalisateurs invités.",
    image: "/images/films.jpg"
  }
];

export default function Evenements() {
  return (
    <>
      <Navbar />
      <main className="event-list">
        <h1>Événements à venir</h1>
        <div className="event-container">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </>
  );
}
