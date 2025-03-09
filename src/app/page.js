import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#6F4E37] text-white py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Conectamos productores de café directamente contigo
          </h1>
          <p className="text-xl mb-8">
            Sin intermediarios, mejor precio.
          </p>
          <button className="bg-[#E6B325] text-[#4A2C2A] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#C4A484] transition-colors">
            Explorar Productos
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#4A2C2A] mb-12">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Café Orgánico"
              width={800}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#4A2C2A] mb-2">
                Café Arábica
              </h3>
              <p className="text-[#6F4E37] mb-4">$10.00 / kg</p>
              <p className="text-gray-600 mb-4">
                Café de altura, cultivado en Chiapas, México.
              </p>
              <button className="bg-[#6F4E37] text-white px-6 py-2 rounded-md hover:bg-[#4A2C2A] transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Café Orgánico"
              width={800}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#4A2C2A] mb-2">
                Café Robusta
              </h3>
              <p className="text-[#6F4E37] mb-4">$8.00 / kg</p>
              <p className="text-gray-600 mb-4">
                Café con un sabor intenso y alto contenido de cafeína.
              </p>
              <button className="bg-[#6F4E37] text-white px-6 py-2 rounded-md hover:bg-[#4A2C2A] transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Café Orgánico"
              width={800}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#4A2C2A] mb-2">
                Café Orgánico
              </h3>
              <p className="text-[#6F4E37] mb-4">$12.00 / kg</p>
              <p className="text-gray-600 mb-4">
                Cultivado sin pesticidas ni químicos, 100% natural.
              </p>
              <button className="bg-[#6F4E37] text-white px-6 py-2 rounded-md hover:bg-[#4A2C2A] transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#C4A484] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#4A2C2A] mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-[#6F4E37] text-lg max-w-2xl mx-auto">
            Somos un marketplace que conecta directamente a los productores de café con los amantes del café. Nuestra misión es eliminar intermediarios y ofrecer productos de alta calidad a precios justos.
          </p>
        </div>
      </section>
    </div>
  );
}