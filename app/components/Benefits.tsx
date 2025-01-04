'use client'
import React from 'react'

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const benefits: BenefitCardProps[] = [
  {
    title: "Salud Física",
    description: "El baile mejora la salud cardiovascular, la flexibilidad y la fuerza, promoviendo el bienestar físico general.",
    icon: "❤️",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "Claridad Mental",
    description: "El movimiento y la danza ayudan a reducir el estrés, mejorar la concentración y potenciar la función cognitiva.",
    icon: "🧠",
    gradient: "from-yellow-400 to-pink-500"
  },
  {
    title: "Expresión Emocional",
    description: "La danza proporciona una poderosa salida para la expresión emocional y el autodescubrimiento.",
    icon: "😊",
    gradient: "from-purple-500 to-teal-400"
  },
  {
    title: "Conexión Social",
    description: "Las actividades de baile en grupo fomentan conexiones significativas y construyen un sentido de comunidad.",
    icon: "🤝",
    gradient: "from-teal-400 to-yellow-400"
  }
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-12 md:mb-16 text-center">
          Beneficios del Movimiento y la Danza
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ title, description, icon, gradient }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer group">
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-purple-900 mb-3 relative">
        {title}
        <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:w-full`}></span>
      </h3>
      <p className="text-purple-700">{description}</p>
    </div>
  )
}

