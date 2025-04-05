import EventCard from "../../components/eventcard/EventCard";
import "../evenements/evenements.css";
export const metadata = {
  title: "Événements à venir",
  description: "Découvrez nos événements à venir avec des expériences uniques dans différentes villes.",
};


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
    <main className="event-list pt-20 min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Événements à venir</h1>
      <div className="event-container max-w-6xl mx-auto px-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
