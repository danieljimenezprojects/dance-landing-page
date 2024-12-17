'use client'
import { useState } from 'react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    const video = document.getElementById('danceVideo') as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
    }
  }

  return (
    <section className="py-20 px-6 bg-warm-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-warm-900 mb-8 text-center">Descubre Nuestra Pasión por la Danza</h2>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <video
            id="danceVideo"
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=720&width=1280"
            onClick={handlePlayPause}
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <button
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-warm-900 bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-30"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-warm-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-warm-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>
        <p className="mt-4 text-center text-warm-700">
          Este video muestra un vistazo a nuestras clases de waving y floorwork. ¡Únete a nosotros y descubre tu potencial de movimiento!
        </p>
      </div>
    </section>
  )
}

