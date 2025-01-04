'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const handleScroll = () => {
      const sections = ['hero','programa','video','beneficios','contacto']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const menuItems = ['programa', 'video','beneficios','contacto']

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-2 bg-purple-900 shadow-lg' : 'py-4 bg-purple-900'
    }`}>
      <nav className="max-w-7xl mx-auto px-6" aria-label="Main navigation">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="text-2xl font-bold text-purple-50 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Flow Movement
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item} 
                href={`#${item}`} 
                onClick={(e) => handleClick(e, `#${item}`)}
                className={`text-purple-50 hover:text-yellow-300 transition-all duration-300 relative group ${
                  activeSection === item ? 'text-yellow-300' : ''
                }`}
                aria-current={activeSection === item ? 'page' : undefined}
              >
                <span className="relative">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300 transform origin-left transition-transform duration-300 ${
                    activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-purple-900 shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-purple-900/95 backdrop-blur-md z-40 text-purple-50"
          >
            <motion.nav
              className="h-screen flex flex-col items-center justify-center space-y-8 px-6 text-purple-50"
              initial="closed"
              animate="open"
              exit="closed"
              aria-label="Mobile navigation"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    href={`#${item}`} 
                    onClick={(e) => handleClick(e, `#${item}`)}
                    className="relative group"
                    aria-current={activeSection === item ? 'page' : undefined}
                  >
                    <motion.span 
                      className="text-3xl font-medium text-purple-50 hover:text-yellow-300 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </motion.span>
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-300 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

