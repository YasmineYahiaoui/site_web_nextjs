import Navbar from "../components/navbar/Navbar";
import FeaturedEvents from "../components/featuredevents/FeaturedEvents";

import "../app/globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <section className="hero">
          <h1>Vivez l’Art en Direct</h1>
          <p>Participez à des expériences culturelles immersives</p>
          <a href="/evenements" className="cta-button">Découvrir les Événements</a>
        </section>

        {/* Ajout de la section Featured Events */}
        <FeaturedEvents />
      </main>
    </>
  );
}