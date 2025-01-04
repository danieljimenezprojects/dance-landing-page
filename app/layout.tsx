import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flow movement - Fusión de Waving y Breaking',
  description: 'Descubre la fusión única de waving y breaking con Daniel Roke y Daniel Deroe. Aprende técnicas avanzadas de danza y expresión corporal.',
  keywords: 'waving, breaking, danza, expresión corporal, Daniel Roke, Daniel Deroe',
  openGraph: {
    title: 'Flow movement - Fusión de Waving y Breaking',
    description: 'Descubre la fusión única de waving y breaking con Daniel Roke y Daniel Deroe.',
    url: 'https://flowmovement.vercel.app',
    siteName: 'Flow movement',
    images: [
      {
        url: '/fuckers2.webp',
        width: 1200,
        height: 630,
        alt: 'Flow movement - Waving y Breaking',
      },
    ],
    locale: 'es_ES',
    type: 'website',
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

