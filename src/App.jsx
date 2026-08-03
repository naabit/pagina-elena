import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import { WhatsAppIcon } from './components/Icons.jsx'
import { useRevealOnScroll } from './hooks.js'

export default function App() {
  useRevealOnScroll()
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Contact />
<footer className="footer">
  <div className="container footer__inner">
    <p>
      © 2026 R. Elena Fryderup. Todos los derechos reservados.
    </p>

    <p>
      Sitio desarrollado por{" "}
      <a
        href="https://naabit.cl"
        target="_blank"
        rel="noreferrer"
      >
        naabit.cl
      </a>
    </p>
  </div>
</footer>
      <a className="whatsapp-float" href="https://wa.me/56955162685" target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
        <WhatsAppIcon width="27" height="27" />
      </a>
    </>
  )
}
