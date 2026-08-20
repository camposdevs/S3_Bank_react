import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import LogoStrip from './components/LogoStrip.jsx'
import Benefits from './components/Benefits.jsx'
import CardTiers from './components/CardTiers.jsx'
import AppShowcase from './components/AppShowcase.jsx'
import Security from './components/Security.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Benefits />
        <CardTiers />
        <AppShowcase />
        <Security />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
