export default function Products() {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center">Nuestros Productos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Aquí puedes mapear los productos */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/images/coffee.jpg" alt="Café Arábica" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Café Arábica</h3>
              <p className="text-gray-600">$10.00 / kg</p>
              <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }