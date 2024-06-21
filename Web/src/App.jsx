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
import Contact from '../components/Contact'
import ImageCarousel from '../components/ImageCarousel'
import Accordion from '../components/Accordion'


function App() {
  // const [count, setCount] = useState(0)
  const accordionItems = [
    {
      title: 'Título 1',
      content: 'Este es el contenido para el primer ítem del acordeón.'
    },
    {
      title: 'Título 2',
      content: 'Este es el contenido para el segundo ítem del acordeón.'
    },
    {
      title: 'Título 3',
      content: 'Este es el contenido para el tercer ítem del acordeón.'
    }
  ];

  return (
    <>
      <Header />
      <WhatsApp/>
      <MainSection />
      <Stats />
      <Accordion items={accordionItems}/>
      <ImageCarousel/>
      <About/>
      <Contact/>
      <Footer />




    </>
  )
}

export default App
