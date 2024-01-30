import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  window.scrollTo(0,0)
  const [count, setCount] = useState(0)

  return (
   <main>
    <div class=" w-[80vw] relative h-full  bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
    <Navbar/>
    <Home/>
   </main>
  )
}

export default App
