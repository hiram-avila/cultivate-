import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="container mx-auto py-4 px-6">
            <h1 className="text-2xl font-bold text-green-600">Marketplace Café</h1>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-white shadow-md mt-8">
          <div className="container mx-auto py-4 px-6 text-center">
            <p>© 2023 Marketplace Café. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}