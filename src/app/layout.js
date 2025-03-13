// app/layout.js
import Navbar from './components/Navbar';
import './globals.css'; // Importa los estilos de Tailwind

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar /> {/* Aquí se usa el Navbar */}
        <main>{children}</main>
      </body>
    </html>
  );
}