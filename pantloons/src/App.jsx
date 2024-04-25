import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Icons from './Icons'
import Socials from './Socials'
import Subbanner from './Sub-banner'
import Deals from './Deals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/202404-Jeans%20and%20Tees-D?wid=1300&hei=500&fit=wrap" alt="" />
     <Deals />
     <Subbanner />
     <Socials />
     <Icons />
     <Footer />
    </>
  )
}

export default App
