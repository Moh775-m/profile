import { useState } from 'react'

import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <About/>
     <Skills/>
     <Services/>
     <Contact/>
     <Footer/>
     <Nav/>
     </>
  )
}

export default App








