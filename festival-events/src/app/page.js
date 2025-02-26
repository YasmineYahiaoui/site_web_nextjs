import Navbar from "../components/navbar/Navbar";
import FeaturedEvents from "../components/featuredevents/FeaturedEvents";

import "../app/globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home relative">
        {/* Vidéo de fond */}
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videos/152535-803189181_small.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo HTML5.
          </video>
          {/* Overlay pour améliorer la lisibilité du texte */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>

        {/* Contenu de la section Hero */}
        <section className="hero relative z-10 text-white">
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
