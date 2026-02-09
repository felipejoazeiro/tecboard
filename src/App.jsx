import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EventForm } from './components/EventForm'


function App() {
  return (
   <main>
    <header>
      <img src="/logo.png" alt="" />
    </header>
    <section>
      <img src="/banner.png" alt="" />
    </section>
    <EventForm />
   </main>
  )
}

export default App
