import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import EventCard from "../../components/eventcard/EventCard";


const events = [
  { id: 1, title: "Exposition d’Art", date: "2024-03-10", location: "Paris" },
  { id: 2, title: "Concert Live", date: "2024-03-15", location: "Lyon" },
];

export default function Evenements() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Événements à venir</h1>
        <div className="event-list">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
      
    </>
  );
}
