import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
