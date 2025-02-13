"use client";

import Link from "next/link";
import { useState } from "react";
import "../navbar/Navbar.css";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">CultureLive 🎭</Link>
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link href="/evenements" onClick={() => setIsOpen(false)}>Événements</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </header>
  );
}
