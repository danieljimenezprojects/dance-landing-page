import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2 gradient-text">Flow Movement</h3>
            <p className="text-purple-200">Fusionando Waving y Breaking</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link href="https://www.instagram.com/roke.waving" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
            <p className="text-sm text-purple-200">© 2024 Flow Movement. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

