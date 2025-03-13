// components/Navbar.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { LeafIcon, CartIcon } from './icons'; // Importa los íconos

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/products' },
    { name: 'Subir Producto', path: '/upload-product' },
    { name: 'Productores', path: '/producers' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-cream/80 backdrop-blur-md shadow-agro z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-forest font-playfair">
              AgroDirecto
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  href={item.path}
                  className="text-forest hover:text-leaf transition-colors font-medium px-3 py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-leaf transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/login"
              className="bg-leaf text-cream px-6 py-2 rounded-full hover:bg-forest transition-colors flex items-center gap-2"
            >
              <span>Iniciar Sesión</span>
              <CartIcon className="w-5 h-5" /> {/* Tamaño fijo */}
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-forest p-2 rounded-lg hover:bg-leaf/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream/95 backdrop-blur-sm border-t border-leaf/10"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-forest hover:text-leaf text-lg px-4 py-2 rounded-lg hover:bg-leaf/5 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ x: 10 }}
              className="pt-4 border-t border-leaf/10"
            >
              <Link
                href="/login"
                className="bg-leaf text-cream px-6 py-3 rounded-full hover:bg-forest transition-colors flex items-center justify-center gap-2"
              >
                <span>Iniciar Sesión</span>
                <CartIcon className="w-5 h-5" /> {/* Tamaño fijo */}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}