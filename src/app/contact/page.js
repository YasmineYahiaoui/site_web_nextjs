"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../contact/contact.css";

// Schéma de validation avec yup
const schema = yup.object().shape({
  name: yup.string().required("Le nom est obligatoire"),
  email: yup
    .string()
    .email("Email invalide")
    .required("L'email est obligatoire"),
  message: yup.string().required("Le message est obligatoire"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Votre message a bien été envoyé !");
  };

  const sendEmail = () => {
    alert("E-mail envoyé avec succès !");
  };

  return (
    <main className="contact-container">
      <h1>Contactez-nous</h1>
      <p>
        Remplissez ce formulaire pour toute question ou inscription à un
        événement.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <label>Nom</label>
        <input type="text" {...register("name")} />
        {errors.name && <p className="error-message">{errors.name.message}</p>}

        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}

        <label>Message</label>
        <textarea {...register("message")}></textarea>
        {errors.message && (
          <p className="error-message">{errors.message.message}</p>
        )}

        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
}
