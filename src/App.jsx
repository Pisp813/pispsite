import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import './App.css'

function App() {
  return (
    <Router>
      <div style={{fontFamily:'Arial', padding:'2rem'}}>
        <Header/>
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero/>
              <About/>
              <Projects/>
              <Contact/>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  )
}

export default App
