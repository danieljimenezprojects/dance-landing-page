'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProgramDetails() {
  return (
    <section id="program" className="py-20 px-6 bg-warm-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-warm-900 mb-12 text-center">Nuestro Programa de Danza</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-warm-300 bg-opacity-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Daniel Roke demostrando la técnica de waving"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-warm-800 mb-4">Waving con Daniel Roke</h3>
            <p className="text-warm-700">
              Explora el arte fluido y fascinante del waving. Aprende a crear 
              hermosas ilusiones con tu cuerpo, expresando emociones a través 
              de movimientos suaves y ondulantes.
            </p>
          </motion.div>
          <motion.div 
            className="bg-warm-300 bg-opacity-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Daniel Deroe demostrando la técnica de floorwork"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-warm-800 mb-4">Floorwork con Daniel Deroe</h3>
            <p className="text-warm-700">
              Descubre las técnicas poderosas y enraizadoras del floorwork. 
              Conéctate con la tierra y aprende a moverte con gracia y fuerza 
              cerca del suelo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

