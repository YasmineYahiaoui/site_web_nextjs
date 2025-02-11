import Navbar from "../components/navbar/Navbar";
import "../app/globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <h1>Bienvenue à EventArtist</h1>
        <p>Découvrez les meilleurs événements artistiques près de chez vous.</p>
      </main>
    </>
  );
}
