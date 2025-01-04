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
    <section id="contacto" className="relative py-16 md:py-20 px-6 bg-gradient-to-b from-purple-300 to-purple-400 overflow-hidden">
      <div className="max-w-md mx-auto relative">
        <motion.div
          className="absolute inset-0 gradient-border rounded-xl opacity-50"
          style={{ padding: '1px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-purple-50 rounded-xl" />
        </motion.div>
        
        <motion.div
          className="relative glass-card rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold gradient-text mb-8 text-center relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contáctanos
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="w-full px-3 pt-6 pb-2 bg-purple-50/50 backdrop-blur-sm border-2 border-purple-300 rounded-md focus:outline-none focus:border-purple-500 transition-all duration-300 text-purple-900"
                aria-labelledby="name-label"
              />
              <label 
                id="name-label"
                htmlFor="name" 
                className="absolute left-3 top-2 text-purple-600 transition-all duration-300 pointer-events-none transform origin-left text-sm"
              >
                Nombre
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="w-full px-3 pt-6 pb-2 bg-purple-50/50 backdrop-blur-sm border-2 border-purple-300 rounded-md focus:outline-none focus:border-purple-500 transition-all duration-300 text-purple-900"
                aria-labelledby="email-label"
              />
              <label 
                id="email-label"
                htmlFor="email" 
                className="absolute left-3 top-2 text-purple-600 transition-all duration-300 pointer-events-none transform origin-left text-sm"
              >
                Correo Electrónico
              </label>
            </div>

            <div className="relative group">
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required
                className="w-full px-3 pt-6 pb-2 bg-purple-50/50 backdrop-blur-sm border-2 border-purple-300 rounded-md focus:outline-none focus:border-purple-500 transition-all duration-300 text-purple-900 resize-none"
                aria-labelledby="message-label"
              ></textarea>
              <label 
                id="message-label"
                htmlFor="message" 
                className="absolute left-3 top-2 text-purple-600 transition-all duration-300 pointer-events-none transform origin-left text-sm"
              >
                Mensaje
              </label>
            </div>

            <motion.button 
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-purple-50 rounded-md text-lg font-semibold hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg relative overflow-hidden group disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              <span className="relative z-10">{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.form>

          {formStatus && (
            <motion.p 
              className={`mt-4 text-center ${
                formStatus.includes('¡Gracias') ? 'text-green-600' : 'text-red-600'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              role="status"
              aria-live="polite"
            >
              {formStatus}
            </motion.p>
          )}
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-yellow-300/20 to-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.3, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </section>
  )
}

