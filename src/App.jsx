import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// no react, componentes são funções que retornam trechos de interface (HTML)


// props -> propriedades que são passadas para o componente
function TitleForm(props){
  return (
    <h2>{props.children}</h2>
  );
}

function FormFieldset({children}){
  return (
    {children}
  );
}

function Label({children, htmlFor}){
  return (<label htmlFor={htmlFor}>{children}</label>);
}

function Input(props){
  return (<input {...props} />);
}

function EventForm(){
  return (
    <form className='form-event'>
      <TitleForm> Cadastro de evento </TitleForm>
      <FormFieldset> 
        <fieldset>
          <Label htmlFor="name"> Nome do evento </Label>
          <Input type="text" id='name' placeholder='Summer dev hits'/>
        </fieldset>
      </FormFieldset>
    </form>
  );
}

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
