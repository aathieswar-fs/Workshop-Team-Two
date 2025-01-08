import About from "./components/About"
import ContactForm from "./components/Contact"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonial"

function App() {

  return (
    <div className='bg-black text-white'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <ContactForm/>
    </div>  
  )
}

export default App
