import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EventForm } from './components/EventForm'
import { Theme } from './components/Theme'
import { Banner } from './components/Banners'
import { EventCard } from './components/EventCard'



function App() {

  const [estado, setEstado] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: exm[0],
      data: new Date(),
      titulo: "Mulheres no front"
    }
  ]);

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

  function addEvent(e) {
      setEstado([...estado, e]);
      console.log(estado);
  }
  return (
   <main>
    <header>
      <img src="/logo.png" alt="" />
    </header>
    <Banner />
    <EventForm temas={exm} onSubmit={addEvent}/>
    <section className="contaier">
      {exm.map(function (a) {
        if(!estado.some(function(params){
          return params.tema.id === a.id;
        })){
          return null;
        }
      return (<section key={a.id}> 
       <Theme theme={a} />
       <div className="eventos">
       {estado.filter(function(params){
         return params.tema.id === a.id;
       }).map( function (item, index){
          return <EventCard key={index} eventos = {item} />
       }
       )}
       </div>
      </section>
      )
    })}    
    </section>
   </main>
  )
}

export default App
