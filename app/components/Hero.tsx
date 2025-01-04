'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/fuckers2.webp?height=1080&width=1920"
            alt="Silueta de bailarines en luz vibrante"
            fill
            priority
            className="object-cover opacity-20 mix-blend-soft-light"
          />
        </div>
      </motion.div>

      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/50 via-purple-900/80 to-purple-900/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-transparent to-purple-900/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6 pt-24 pb-20 sm:py-24 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative inline-block"
        >
<motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-purple-50 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative inline-block">
              Conecta con tu{' '}
              <motion.span 
                className="relative inline-block cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                movimiento
                <motion.span 
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.span>{' '}
              y la{' '}
              <motion.span 
                className="relative inline-block cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                danza
                <motion.span 
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.span>
            </span>
          </motion.h1>
        </motion.div>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-8 md:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Únete a Daniel Roke y Daniel Deroe en un viaje de expresión a través de la danza. 
          Descubre el waving y el breaking para improvisar, expresarte con otras personas y conocerte mejor.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.a 
            href="#programa" 
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 overflow-hidden rounded-full w-full max-w-[280px] sm:max-w-none sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 text-base sm:text-lg font-semibold text-purple-50 whitespace-nowrap">
              Explora Nuestro Programa
            </span>
          </motion.a>

          <motion.a 
            href="#contacto" 
            className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full border-2 border-purple-300 w-full max-w-[280px] sm:max-w-none sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-purple-300/10 backdrop-blur-sm" />
            <span className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <span className="relative z-10 text-base sm:text-lg font-semibold text-purple-50 whitespace-nowrap">
              Contáctanos
            </span>
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900 to-transparent z-20" />
      
      <motion.a 
        href="#programa"
        className="absolute bottom-8 left-0 right-0 z-30 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.div
          className="relative w-12 h-12"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <span className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 animate-ping" />
          <motion.svg
            viewBox="0 0 24 24"
            className="w-12 h-12 text-purple-50"
            whileHover={{ scale: 1.1 }}
          >
            <motion.path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 13l5 5 5-5M7 6l5 5 5-5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.svg>
        </motion.div>
      </motion.a>
    </section>
  )
}

