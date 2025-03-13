'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LeafIcon } from './components/icons';

export default function Home() {
  const products = [
    { 
      id: 1, 
      name: 'Café Orgánico', 
      type: 'cafe', 
      price: '$15.99/kg',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      description: 'Cultivado en las montañas de Colombia, proceso de tostado artesanal',
      color: 'bg-coffee'
    },
    { 
      id: 2, 
      name: 'Limón Fresco', 
      type: 'limon', 
      price: '$2.99/kg',
      image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      description: 'Recién cosechado, alto contenido de vitamina C',
      color: 'bg-lemon'
    },
    { 
      id: 3, 
      name: 'Aguacate Hass', 
      type: 'aguacate', 
      price: '$4.99/kg',
      image: 'https://images.unsplash.com/photo-1595231776518-5bda2a9d44b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      description: 'Cremosos y nutritivos, cosechados en su punto óptimo',
      color: 'bg-avocado'
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627920768905-575535d6dd2e?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h1 className="text-5xl font-bold text-cream mb-6 leading-tight">
              Cultivando 
              <span className="text-leaf"> Conexiones Directas</span>
            </h1>
            <p className="text-lg text-cream/90 mb-8 max-w-xl">
              Eliminamos intermediarios para ofrecerte productos frescos del campo a tu mesa, asegurando un comercio justo para todos.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-leaf text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-forest transition-colors"
            >
              Explorar Productos
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-forest mb-16"
          >
            Nuestra Filosofía
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-xl bg-white shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-leaf/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-2">Comercio Justo</h3>
              <p className="text-gray-600">Hasta 40% más ingresos para los agricultores</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl bg-white shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-coffee/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-2">Sin Intermediarios</h3>
              <p className="text-gray-600">Conexión directa productor-consumidor</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-xl bg-white shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-avocado/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-avocado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-2">Trazabilidad Total</h3>
              <p className="text-gray-600">Conoce el origen de cada producto</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-forest mb-16"
          >
            Nuestros Productos Estrella
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group relative"
              >
                <div className={`${product.color} h-64 relative overflow-hidden`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-forest mb-2">{product.name}</h3>
                  <p className="text-leaf font-medium mb-4">{product.price}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-leaf text-cream py-2 rounded-lg hover:bg-forest transition-colors"
                  >
                    Comprar Ahora
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-forest mb-16"
          >
            Nuestro Modelo de Negocio
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-leaf/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-leaf font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-forest mb-2">Agricultores Registran sus Cultivos</h3>
                  <p className="text-gray-600">Suben sus productos con información detallada de cultivo y cosecha</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-coffee/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-coffee font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-forest mb-2">Compradores Directos</h3>
                  <p className="text-gray-600">Restaurantes, mercados y consumidores finales compran directamente</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-avocado/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-avocado font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-forest mb-2">Logística Optimizada</h3>
                  <p className="text-gray-600">Recolección y entrega eficiente manteniendo la frescura</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Agricultor sonriente"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-forest text-cream py-12"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold">AgroDirecto</span>
              </div>
              <p className="text-cream/80">Conectando el campo con el mundo moderno</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Productos</h4>
              <ul className="space-y-2">
                {['Café', 'Limón', 'Aguacate', 'Todos'].map((item) => (
                  <li key={item} className="text-cream/80 hover:text-leaf cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Agricultores</h4>
              <ul className="space-y-2">
                {['Registro', 'Historia', 'Comunidad', 'Apoyo'].map((item) => (
                  <li key={item} className="text-cream/80 hover:text-leaf cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-cream/80">contacto@agrodirecto.com</li>
                <li className="text-cream/80">+52 55 1234 5678</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-leaf/20 mt-12 pt-8 text-center text-cream/80">
            <p>© 2024 AgroDirecto. Todos los derechos reservados.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}