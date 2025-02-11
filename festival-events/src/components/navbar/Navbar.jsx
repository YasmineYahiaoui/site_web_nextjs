"use client";

import Link from "next/link";
import { useState } from "react";

import "../navbar/Navbar.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">EventArtist</Link>
        <nav className={isOpen ? "nav-links active" : "nav-links"}>
          <Link href="/">Accueil</Link>
          <Link href="/evenements">Événements</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}