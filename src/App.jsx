import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='absolute overflow-hidden '>
    <Navbar/>
    <Home/>

   </main>
  )
}

export default App
