import About from "./components/About"
import ContactForm from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonial"


function App() {
  return (
    <div className="bg-black text-white">
    <Header/>
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default App;
