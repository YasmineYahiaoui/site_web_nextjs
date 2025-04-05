//yasmine lynda rayane mellissa hamza redouane
"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../themetoggle/ThemeToggle";
import "../navbar/Navbar.css";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar dark:bg-gray-800">
      <div className="navbar-container">
        <Link href="/" className="logo">CultureLive 🎭</Link>
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link href="/evenements" onClick={() => setIsOpen(false)}>Événements</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
