import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import About from '../components/About'
import WhatsApp from '../components/WhatsApp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <WhatsApp/>
      <MainSection />
      <Stats />
      <About />
      <Footer />



    </>
  )
}

export default App
