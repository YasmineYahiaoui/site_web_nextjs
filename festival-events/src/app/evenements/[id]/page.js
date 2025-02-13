"use client"; // Obligatoire pour utiliser useRouter

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../components/navbar/Navbar";
import Image from "next/image";



import "../../evenements/EventDetails.css";

const events = [
  {
    id: 1,
    title: "Peinture et sculpture en direct",
    category: "🎨 Ateliers d'art",
    date: "10 mars 2025",
    location: "Paris",
    description: "Participez à une expérience unique de peinture et de sculpture en direct.",
    image: "/images/PS.jpg",
    content: `Dans cet atelier immersif, vous aurez l'occasion de travailler aux côtés de peintres et sculpteurs professionnels. 
    Découvrez les techniques du dessin, de la peinture à l'huile et de la sculpture sur bois ou sur pierre. 
    Les artistes partageront leurs secrets et vous guideront pour créer votre propre œuvre. Un événement à ne pas manquer !`
  },
  {
    id: 2,
    title: "Spectacle en plein air",
    category: "🎭 Théâtre et Impro",
    date: "15 avril 2025",
    location: "Lyon",
    description: "Une pièce de théâtre interactive en plein air avec improvisation.",
    image: "/images/theatre.jpg",
    content: `Ce spectacle interactif en plein air vous plonge dans un univers où le public joue un rôle clé dans l’histoire. 
    Avec une troupe d'improvisation talentueuse, vous pourrez influencer le scénario et participer à des scènes hilarantes. 
    Que vous soyez spectateur ou acteur, préparez-vous à une soirée inoubliable sous les étoiles !`
  },
  {
    id: 3,
    title: "Débat autour du cinéma indépendant",
    category: "🎬 Projections de films",
    date: "20 mai 2025",
    location: "Marseille",
    description: "Un débat autour du cinéma indépendant avec des réalisateurs invités.",
    image: "/images/films.jpg",
    content: `Le cinéma indépendant occupe une place de choix dans l’industrie du film. 
    Ce débat rassemblera des réalisateurs et producteurs indépendants qui partageront leurs expériences, défis et inspirations. 
    Des projections exclusives auront lieu suivies de discussions interactives avec le public. Une immersion fascinante dans le monde du septième art !`
  }
];

export default function EventDetails() {
    const params = useParams(); //  Utilisation correcte de `params`
    const [event, setEvent] = useState(null);
  
    useEffect(() => {
      if (params?.id) {
        const foundEvent = events.find(event => event.id.toString() === params.id);
        setEvent(foundEvent);
      }
    }, [params?.id]);
  
    if (!event) {
      return <p>Événement non trouvé.</p>;
    }
  
    return (
      <>
        <Navbar />
        <main className="event-details">
          <h1>{event.title}</h1>
          <p className="event-category">{event.category}</p>
         
          {/* ✅ Corrige l'affichage des images */}
          {event.image ? (
          <Image 
            src={event.image} 
            alt={event.title} 
            width={600} 
            height={400} 
            className="event-image" 
          />
        ) : (
          <p>Aucune image disponible</p>
        )}
          <p className="event-date">📅 {event.date} - 📍 {event.location}</p>
          <p className="event-description">{event.description}</p>
          <article className="event-content">{event.content}</article>
        </main>
      </>
    );
  }