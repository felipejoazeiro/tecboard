import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EventForm } from './components/EventForm'
import { Theme } from './components/Theme'
import { Banner } from './components/Banners'


const exm = [
  {
    id: 1,
    name: "Front-end",
  },
  {
    id: 2,
    name: "Back-end",
  },
  {
    id: 3,
    name: "DevOps",
  },
  {
    id: 4,
    name: "IA",
  },
  {
    id: 5,
    name: "Data Science",
  },
  {
    id: 6,
    name: "Cloud",
  }
];

function App() {
  return (
   <main>
    <header>
      <img src="/logo.png" alt="" />
    </header>
    <Banner />
    <EventForm />
    {exm.map(function (a) {
      return (<section key={a.id}> 
       <Theme theme={a} />
      </section>
      )
    })}

    
   </main>
  )
}

export default App
