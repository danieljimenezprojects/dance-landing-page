'use client'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    try {
      const formData = new FormData(e.currentTarget)
      
      const response = await fetch('https://formspree.io/f/xpwwordo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        setFormStatus('¡Gracias por tu mensaje! Nos pondremos en contacto pronto. Si no recibe respuesta en los próximos días, póngase en contacto con nosotros en nuestro instagram @roke.waving')
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        throw new Error(data.error || 'Error al enviar el formulario. Contacte con nosotros por instagram @roke.waving')
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setFormStatus('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde o contacte con nosotros por nuestro instagram @roke.waving.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="relative py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-purple-300 to-purple-400">
      <div className="max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Contáctanos
          </h2>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-purple-100 mb-1"
              >
                Nombre
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="w-full px-4 py-2 bg-purple-50/50 backdrop-blur-sm border-2 border-purple-300 rounded-md focus:outline-none focus:border-purple-500 transition-colors text-purple-900"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-purple-100 mb-1"
              >
                Correo Electrónico
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="w-full px-4 py-2 bg-purple-50/50 backdrop-blur-sm border-2 border-purple-300 rounded-md focus:outline-none focus:border-purple-500 transition-colors text-purple-900"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-purple-100 mb-1"
              >
                Mensaje
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required
                className="w-full px-4 py-2 bg-purple-50/50 backdrop-blur-sm border-2 border-purple-300 rounded-md focus:outline-none focus:border-purple-500 transition-colors text-purple-900 resize-none"
              ></textarea>
            </div>

            <motion.button 
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-purple-50 rounded-md text-lg font-semibold hover:from-pink-500 hover:to-purple-600 transition-colors shadow-lg disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </form>

          {formStatus && (
            <div 
              className={`mt-4 p-3 rounded-md ${
                formStatus.includes('¡Gracias') ? 'bg-green-500/10 text-green-200' : 'bg-red-500/10 text-red-200'
              }`}
              role="alert"
            >
              {formStatus}
            </div>
          )}
        </div>
      </div>

      {/* Background gradients */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-300/20 to-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>
    </section>
  )
}

