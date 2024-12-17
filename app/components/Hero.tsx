'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Silueta de bailarines en una luz cálida y dorada"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-50 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Abraza el Ritmo de tu Alma
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-warm-100 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Únete a Daniel Roke y Daniel Deroe en un extraordinario viaje de autoexpresión a través de la danza. 
          Descubre la fluidez del waving y el poder enraizador del floorwork mientras liberas el potencial oculto de tu cuerpo.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a 
            href="#program" 
            className="px-8 py-3 bg-warm-600 text-warm-50 rounded-full text-lg font-semibold hover:bg-warm-700 transition-colors duration-300 shadow-lg"
          >
            Explora Nuestro Programa
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-warm-50 text-warm-50 rounded-full text-lg font-semibold hover:bg-warm-50 hover:text-warm-900 transition-colors duration-300"
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a 
            href="#benefits" 
            aria-label="Desplázate a la sección de beneficios"
            className="text-warm-50 hover:text-warm-200 transition-colors duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 mx-auto animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

