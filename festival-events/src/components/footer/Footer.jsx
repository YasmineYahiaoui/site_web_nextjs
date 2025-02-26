import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css"; // Import du CSS personnalisé

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Bloc 1 - À propos */}
        <div className="footer-section">
          <h2>Festival Events</h2>
          <p>Découvrez et participez aux meilleurs événements culturels.</p>
        </div>

        {/* Bloc 2 - Liens rapides */}
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/evenements">Événements</a></li>

            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Bloc 3 - Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email : <a href="mailto:contact@festivalevents.com">contact@festivalevents.com</a></li>
            <li>Téléphone : <a href="tel:+1234567890">+1 234 567 890</a></li>
            <li>Adresse : 123 Rue des Festivals, Paris</li>
          </ul>
        </div>

        {/* Bloc 4 - Réseaux sociaux */}
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://youtube.com"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Ligne de séparation et droits réservés */}
      <div className="footer-bottom">
        © 2024 Festival Events. Tous droits réservés.
      </div>
    </footer>
  );
}
