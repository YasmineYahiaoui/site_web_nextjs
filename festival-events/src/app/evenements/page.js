import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Evenements() {
  const events = [
    { id: 1, name: "Festival Osheaga", date: "3 Août 2025", image: "/osheaga.jpg" },
    { id: 2, name: "Concert Green Day", date: "4 Août 2025", image: "/greenday.jpg" },
  ];

  return (
    <>
      <Navbar />
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="border p-4 shadow-lg">
            <img src={event.image} alt={event.name} className="w-full h-40 object-cover" />
            <h2 className="text-xl font-bold">{event.name}</h2>
            <p>{event.date}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
