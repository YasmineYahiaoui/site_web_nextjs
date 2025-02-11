import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-around">
      <Link href="/">Accueil</Link>
      <Link href="/evenements">Événements</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
