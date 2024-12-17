'use client'
import { motion } from 'framer-motion'

const benefits = [
  {
    title: "Salud Física",
    description: "La danza mejora la salud cardiovascular, la flexibilidad y la fuerza, promoviendo el bienestar físico general.",
    icon: "❤️"
  },
  {
    title: "Claridad Mental",
    description: "El movimiento y la danza ayudan a reducir el estrés, mejorar la concentración y potenciar la función cognitiva.",
    icon: "🧠"
  },
  {
    title: "Expresión Emocional",
    description: "La danza proporciona una poderosa vía para la expresión emocional y el autodescubrimiento.",
    icon: "😊"
  },
  {
    title: "Conexión Social",
    description: "Las actividades de danza en grupo fomentan conexiones significativas y construyen un sentido de comunidad.",
    icon: "🤝"
  }
]

export default function Benefits() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-warm-100 to-warm-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-warm-900 mb-12 text-center">Beneficios del Movimiento y la Danza</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-warm-300 bg-opacity-50 p-6 rounded-lg shadow-md overflow-hidden relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-warm-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
              <div className="relative z-10 transition-colors duration-300 group-hover:text-warm-50">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-warm-800 mb-2 group-hover:text-warm-50">{benefit.title}</h3>
                <p className="text-warm-700 group-hover:text-warm-100">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

