// app/page.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ShoppingCart, Sun } from 'lucide-react'; // Asegúrate de instalar lucide-react

export default function Home() {
  const products = [
    { id: 1, name: 'Café Orgánico', type: 'cafe', price: '$15.99/kg' },
    { id: 2, name: 'Limón Fresco', type: 'limon', price: '$2.99/kg' },
    { id: 3, name: 'Aguacate Hass', type: 'aguacate', price: '$4.99/kg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">AgroMarket</span>
          </motion.div>
          
          <div className="flex items-center gap-8">
            <motion.ul className="hidden md:flex gap-6">
              {['Productos', 'Agricultores', 'Sobre Nosotros'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="text-green-800 hover:text-green-600 cursor-pointer font-medium"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Carrito</span>
              <span className="bg-white text-green-600 px-2 rounded-full text-sm">3</span>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl font-bold text-green-900 mb-6 leading-tight">
              Conectando Agricultores con el 
              <span className="text-green-600"> Mundo</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Mercado líder en productos agrícolas de alta calidad. Cultivados con pasión, entregados con cuidado.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Explorar Productos
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {['/cafe.jpg', '/limones.jpg', '/aguacates.jpg', '/campo.jpg'].map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt="Productos agrícolas"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-green-900 mb-16"
          >
            Productos Destacados
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={`/${product.type}.jpg`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">{product.name}</h3>
                  <p className="text-green-600 font-medium">{product.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-green-100 text-green-800 py-2 rounded-lg hover:bg-green-200 transition-colors"
                  >
                    Añadir al carrito
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-green-900 text-white py-12"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2024 AgroMarket. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6">
            {['Términos de servicio', 'Política de privacidad', 'Contacto'].map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -2 }}
                className="cursor-pointer hover:text-green-300"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}