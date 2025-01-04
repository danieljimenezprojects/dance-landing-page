'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VideoDemo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPoster, setShowPoster] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('loadeddata', () => setShowPoster(false))
      return () => {
        video.removeEventListener('loadeddata', () => setShowPoster(false))
      }
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id="video" className="py-20 px-6 bg-gradient-to-b from-purple-100 to-purple-200 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold gradient-text mb-12 text-center leading-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Fusión de Estilos: Waving y Breaking
        </motion.h2>
        <div className="relative aspect-[9/16] max-w-sm mx-auto">
          <motion.div
            className="w-full h-full rounded-lg shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {showPoster && (
              <Image
                src="/fuckers2.webp"
                alt="Portada del video de waving y breaking"
                layout="fill"
                objectFit="cover"
                priority
              />
            )}
            <video 
              ref={videoRef}
              src="/moveflow.mp4" 
              className="w-full h-full object-cover"
              onClick={togglePlay}
              playsInline
              preload="metadata"
              poster="/fuckers2.webp"
              aria-label="Video demostrativo de waving y breaking"
            />
            <button
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-30"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
            >
              <svg 
                className={`w-16 h-16 text-white transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isPlaying ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                )}
              </svg>
            </button>
          </motion.div>
        </div>
        <motion.p
          className="mt-12 text-xl text-purple-800 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Observa cómo Daniel Roke y Daniel Deroe fusionan las técnicas de waving y breaking en una danza fluida y poderosa, creando una experiencia visual única y cautivadora.
        </motion.p>
      </div>
    </section>
  )
}

