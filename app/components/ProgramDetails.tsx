'use client'
import Image from 'next/image'

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  gradient: string;
}

const programs: ProgramCardProps[] = [
  {
    title: "Waving con Daniel Roke",
    description: "Explora el arte fluido y fascinante del waving. Aprende a crear hermosas ilusiones con tu cuerpo, expresando emociones a través de movimientos suaves y ondulantes.",
    image: "/daniwaver.webp",
    alt: "Daniel Roke demostrando técnica de waving",
    gradient: "from-pink-500 to-sky-500"
  },
  {
    title: "Breaking con Daniel Deroe",
    description: "Descubre las técnicas y fundamentos del breaking. Conéctate con la tierra y aprende a moverte con elegancia y fuerza cerca del suelo.",
    image: "/danifucker.webp",
    alt: "Daniel Deroe demostrando técnica de breaking",
    gradient: "from-yellow-400 to-pink-500"
  }
]

export default function ProgramDetails() {
  return (
    <section id="programa" className="relative py-16 md:py-20 px-6 bg-gradient-to-b from-purple-50 to-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 relative inline-block">
            Nuestro Programa de Baile
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramCard({ title, description, image, alt, gradient }: ProgramCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
      <div className="relative p-6">
        <div className="relative overflow-hidden rounded-lg mb-6">
          <Image
            src={image}
            alt={alt}
            width={500}
            height={300}
            className="rounded-lg transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-semibold text-purple-900 mb-4 relative">
          {title}
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:w-full`} />
        </h3>
        <p className="text-purple-700">{description}</p>
      </div>
    </div>
  )
}

