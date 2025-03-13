"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function UploadProduct() {
  const [formData, setFormData] = useState({
    tipoCultivo: "",
    variedad: "",
    cantidad: "",
    fechaCosecha: "",
    fechaDisponibilidad: "",
    ubicacion: "",
    certificaciones: "",
    precio: "",
    condiciones: "",
    imagenes: [],
  });

  const [previewImages, setPreviewImages] = useState([]);

  const cropOptions = [
    {
      value: "café",
      label: "Café",
      image:
        "https://images.unsplash.com/photo-1530592126211-8294b41580ff?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      value: "limón",
      label: "Limón",
      image:
        "https://images.unsplash.com/photo-1512506941056-539bf4301ce2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      value: "aguacate",
      label: "Aguacate",
      image:
        "https://images.unsplash.com/photo-1612506266679-606568a33215?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, imagenes: files }));
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const handleCropSelect = (value) => {
    setFormData((prev) => ({ ...prev, tipoCultivo: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    alert("Producto subido correctamente.");
  };

  // Variantes para animaciones con Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dfe7ef] flex items-center justify-center p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[95%] bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header con imagen que abarca todo */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1661879933782-2b8e7abb6e79?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cultivos agrícolas"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center">
              <motion.h1
                variants={itemVariants}
                className="text-5xl font-bold text-white drop-shadow-lg"
              >
                Publica tu Producto
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-4 text-xl text-gray-200"
              >
                Conecta con productores de café, limón y aguacate
              </motion.p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          {/* Selector visual de Cultivo */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="text-xl font-medium text-gray-700">
              Selecciona el Tipo de Cultivo
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cropOptions.map((option) => (
                <motion.div
                  key={option.value}
                  onClick={() => handleCropSelect(option.value)}
                  whileHover={{ scale: 1.05 }}
                  className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer border-4 transition-all group ${
                    formData.tipoCultivo === option.value
                      ? "border-[#2d5523]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={option.image}
                    alt={option.label}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-xl text-white font-bold">
                      {option.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Variedad */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="text-xl font-medium text-gray-700">
              Variedad
            </label>
            <input
              type="text"
              name="variedad"
              value={formData.variedad}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#2d5523] focus:ring-2 focus:ring-[#2d5523]/30 transition-all hover:border-[#2d5523]/50"
              placeholder="Ej: Café Arábica"
              required
            />
          </motion.div>

          {/* Cantidad Disponible */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="flex items-center text-xl font-medium text-gray-700">
              <svg
                className="w-7 h-7 mr-2 text-[#2d5523]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Cantidad Disponible
            </label>
            <input
              type="text"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#2d5523] focus:ring-2 focus:ring-[#2d5523]/30 transition-all hover:border-[#2d5523]/50"
              placeholder="Ej: 100 kg"
              required
            />
          </motion.div>

          {/* Fecha de Cosecha */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="flex items-center text-xl font-medium text-gray-700">
              <svg
                className="w-7 h-7 mr-2 text-[#2d5523]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Fecha de Cosecha
            </label>
            <input
              type="date"
              name="fechaCosecha"
              value={formData.fechaCosecha}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#2d5523] focus:ring-2 focus:ring-[#2d5523]/30 transition-all hover:border-[#2d5523]/50"
              required
            />
          </motion.div>

          {/* Subir Imágenes */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="text-xl font-medium text-gray-700">
              Subir Imágenes
            </label>
            <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#2d5523] transition-colors">
              <input
                type="file"
                name="imagenes"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                multiple
              />
              <svg
                className="w-10 h-10 mx-auto text-[#2d5523]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <p className="mt-2 text-gray-600">
                Arrastra tus imágenes o haz clic para subirlas
              </p>
            </div>
            {previewImages.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {previewImages.map((src, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative w-full h-40 rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`Imagen ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Botón de Envío */}
          <motion.button
            type="submit"
            variants={itemVariants}
            className="w-full bg-gradient-to-r from-[#2d5523] to-[#4a7729] text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:shadow-2xl transition-all hover:from-[#4a7729] hover:to-[#2d5523]"
          >
            Publicar Producto
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}