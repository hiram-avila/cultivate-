import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <Navbar /> {/* Aquí se incluye el navbar */}
        <main>{children}</main>
      </body>
    </html>
  );
}