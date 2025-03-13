export default function Cart() {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center">Carrito de Compras</h1>
        <div className="mt-8">
          {/* Aquí puedes mapear los productos en el carrito */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold">Café Arábica</h3>
            <p className="text-gray-600">$10.00 / kg</p>
            <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Eliminar
            </button>
          </div>
        </div>
        <div className="mt-8 text-right">
          <p className="text-xl font-semibold">Total: $10.00</p>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Finalizar Compra
          </button>
        </div>
      </div>
    );
  }