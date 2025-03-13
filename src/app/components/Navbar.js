import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          Marketplace Café
        </Link>

        {/* Enlaces */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-600">
            Inicio
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-green-600">
            Productos
          </Link>
          <Link href="/upload-product" className="text-gray-700 hover:text-green-600">
            Subir Producto
          </Link>
          <Link href="/producers" className="text-gray-700 hover:text-green-600">
            Productores
          </Link>
        </div>

        {/* Botón de Acción */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Iniciar Sesión
          </Link>
        </div>

        {/* Menú Hamburguesa (para móviles) */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menú Móvil (oculto por defecto) */}
      <div className="md:hidden bg-white">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block text-gray-700 hover:text-green-600">
            Inicio
          </Link>
          <Link href="/products" className="block text-gray-700 hover:text-green-600">
            Productos
          </Link>
          <Link href="/upload-product" className="block text-gray-700 hover:text-green-600">
            Subir Producto
          </Link>
          <Link href="/producers" className="block text-gray-700 hover:text-green-600">
            Productores
          </Link>
          <Link
            href="/login"
            className="block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}