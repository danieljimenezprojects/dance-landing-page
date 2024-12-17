'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header 
      className="py-4 px-6 bg-warm-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <motion.div 
          className="text-2xl font-semibold text-warm-800"
          whileHover={{ scale: 1.05 }}
        >
          Conexión de Danza
        </motion.div>
        <ul className="flex space-x-4">
          <li><Link href="#program" className="text-warm-700 hover:text-warm-900">Programa</Link></li>
          <li><Link href="#contact" className="text-warm-700 hover:text-warm-900">Contacto</Link></li>
        </ul>
      </nav>
    </motion.header>
  )
}

