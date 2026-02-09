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
    <section>
      <Theme theme={exm[0]} />
    </section>
    <section>
      <Theme theme={exm[1]} />
    </section>
    <section>
      <Theme theme={exm[2]} />
    </section>
    <section>
      <Theme theme={exm[3]} />
    </section>
    <section>
      <Theme theme={exm[4]} />
    </section>
    <section>
      <Theme theme={exm[5]} />
    </section>
   </main>
  )
}

export default App
