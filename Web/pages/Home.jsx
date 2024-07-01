


import MainSection from '../components/MainSection'

import Stats from '../components/Stats'
import About from '../components/About'
import WhatsApp from '../components/WhatsApp'
import Contact from '../components/Contact'
import ImageCarousel from '../components/ImageCarousel'
import Accordion from '../components/Accordion'


import { Routes, Route, Outlet, Link } from "react-router-dom";
import Centros from '../components/Centros'


function Home() {



    return (
        <>
            <WhatsApp />
            <MainSection />
            <Stats />
            <Centros />
            <About />
            <ImageCarousel />
            <Contact />
        </>
    )
}

export default Home