import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{fontFamily:'Arial', padding:'2rem'}}>
      <header>
        <h1>SuperDevguy</h1>
        <nav>
          <a href="#about">About</a> | <a href="#project">Projects</a> | <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I am a Deep Neural Network Developer capable of creating neural networks tailored to clients' requirements—such as object detection, identification, 
          and text-to-image generation. I am also an expert in Natural Language Processing (NLP), with experience in building custom language models, including 
          large language models (LLMs).</p>
      </section>

      <section id="project">
        <h2>Projects</h2>
        <ul>
          <li>Object Detection System</li>
          <li>Image Classification Model</li>
          <li>Text-to-Image Generation</li>
          <li>Custom Language Model</li>
          <li>Chatbot Development</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>If you are interested in my services or have any questions, feel free to reach out to me at <a href="jhonm318@outlook.com">Contact to me</a></p>
      </section>

      <footer>
        <p>© 2023 SuperDevguy. All rights reserved.</p>
      </footer>
    </div>

  )
}

export default App
