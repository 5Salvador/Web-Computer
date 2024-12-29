import { useRef } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { PreLoader } from './components/Preloader/Preloader'

const App = () => {
  //create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior:'smooth' });
  }



  return (
    <>
      <PreLoader />
      
      <div>
      <Header
        onScroll={(section) => {
          if (section === 'home') scrollToSection(homeRef);
          if (section === 'about') scrollToSection(aboutRef);
          if (section === 'services') scrollToSection(servicesRef);
          if (section === 'contact') scrollToSection(contactRef);
        }}
      />
      <Hero />
      <section ref={homeRef}>
        <Home />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={servicesRef}>
        <Services />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
      </div>
    </>
  )
 

}

export default App