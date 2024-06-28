


import MainSection from '../components/MainSection'

import Stats from '../components/Stats'
import About from '../components/About'
import WhatsApp from '../components/WhatsApp'
import Contact from '../components/Contact'
import ImageCarousel from '../components/ImageCarousel'
import Accordion from '../components/Accordion'


import { Routes, Route, Outlet, Link } from "react-router-dom";


function Home() {

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
        <WhatsApp />
        <MainSection />
        <Stats />
        <Accordion items={accordionItems} />
        <ImageCarousel />
        <About />
        <Contact />
     </>
  )
}

export default Home