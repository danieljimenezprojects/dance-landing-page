import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conexión de Baile - Fusión de Waving y Breaking',
  description: 'Descubre la fusión única de waving y breaking con Daniel Roke y Daniel Deroe. Aprende técnicas avanzadas de danza y expresión corporal.',
  keywords: 'waving, breaking, danza, expresión corporal, Daniel Roke, Daniel Deroe',
  openGraph: {
    title: 'Conexión de Baile - Fusión de Waving y Breaking',
    description: 'Descubre la fusión única de waving y breaking con Daniel Roke y Daniel Deroe.',
    url: 'https://conexion-de-baile.vercel.app',
    siteName: 'Conexión de Baile',
    images: [
      {
        url: 'https://conexion-de-baile.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Conexión de Baile - Waving y Breaking',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conexión de Baile - Fusión de Waving y Breaking',
    description: 'Descubre la fusión única de waving y breaking con Daniel Roke y Daniel Deroe.',
    images: ['https://conexion-de-baile.vercel.app/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

