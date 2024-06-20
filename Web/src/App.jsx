import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from'../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import Stats from '../components/Stats'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainSection/>
      <Stats/>
      <Footer/>
      
        
    </>
  )
}

export default App
