import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Newsletter from './components/newsletter.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<HeroSection />
    </>
  )
}

export default App;
