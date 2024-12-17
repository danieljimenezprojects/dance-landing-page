'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí normalmente manejarías el envío del formulario
    // Para este ejemplo, solo estableceremos un mensaje de éxito
    setFormStatus('¡Gracias por tu interés! Nos pondremos en contacto pronto.')
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-warm-200 to-warm-100">
      <div className="max-w-md mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-warm-900 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contáctanos
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="block text-warm-700 mb-2">Nombre</label>
            <input type="text" id="name" name="name" required
              className="w-full px-3 py-2 border border-warm-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500 bg-warm-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-warm-700 mb-2">Correo Electrónico</label>
            <input type="email" id="email" name="email" required
              className="w-full px-3 py-2 border border-warm-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500 bg-warm-50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-warm-700 mb-2">Mensaje</label>
            <textarea id="message" name="message" rows={4} required
              className="w-full px-3 py-2 border border-warm-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500 bg-warm-50"
            ></textarea>
          </div>
          <motion.button 
            type="submit"
            className="w-full bg-warm-600 text-warm-50 py-3 px-8 rounded-full text-lg font-semibold hover:bg-warm-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Mensaje
          </motion.button>
        </motion.form>
        {formStatus && (
          <motion.p 
            className="mt-4 text-center text-warm-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {formStatus}
          </motion.p>
        )}
      </div>
    </section>
  )
}

