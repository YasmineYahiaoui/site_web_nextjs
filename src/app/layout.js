import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";
export const metadata = {
  title: "Festival 2025",
  description: "Développé par nous, pour nous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="transition-colors duration-300 bg-white dark:bg-gray-900 dark:text-white">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
