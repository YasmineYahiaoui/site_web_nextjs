"use client"; // Ajoute cette ligne en haut du fichier

import { useState } from "react"; // Ensuite importe useState
import Navbar from "../../components/navbar/Navbar";
import "../contact/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Votre message a bien été envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="contact-container">
        <h1>Contactez-nous</h1>
        <p>Remplissez ce formulaire pour toute question ou inscription à un événement.</p>
        
        {successMessage && <p className="success-message">{successMessage}</p>}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Nom</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </main>
    </>
  );
}
