import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ProgramDetails from './components/ProgramDetails'
import VideoSection from './components/VideoSection'
import InstagramFeed from './components/InstagramFeed'
import ContactForm from './components/ContactForm'
import Seo from './components/Seo'

export default function Home() {
  return (
    <>
      <Seo 
        title="Conexión de Danza - Descubre el Arte del Movimiento"
        description="Únete a Daniel Roke y Daniel Deroe en un viaje de autoexpresión a través de la danza. Explora el waving y el floorwork en nuestro programa único."
        canonicalUrl="https://www.tudominio.com"
      />
      <main className="min-h-screen bg-warm-100">
        <Header />
        <Hero />
        <div id="benefits">
          <Benefits />
        </div>
        <ProgramDetails />
        <VideoSection />
        <InstagramFeed />
        <ContactForm />
      </main>
    </>
  )
}

