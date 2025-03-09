export default function Home() {
  return (
    <div>
      <section className="bg-green-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Conectamos productores de café directamente contigo</h1>
        <p className="mt-4">Sin intermediarios, mejor precio.</p>
        <button className="mt-8 bg-white text-green-600 px-6 py-2 rounded-md hover:bg-gray-100">
          Explorar Productos
        </button>
      </section>
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center">Productos Destacados</h2>
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
      </section>
    </div>
  );
}