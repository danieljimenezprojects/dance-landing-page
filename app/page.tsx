import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ProgramDetails from './components/ProgramDetails'
import VideoDemo from './components/VideoDemo'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-olive-900">
      <Hero />
      <ProgramDetails />
      <VideoDemo />
      <Benefits />
      <ContactForm />
    </main>
  )
}

