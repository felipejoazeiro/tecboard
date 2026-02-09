import { Input } from "../EnterField";
import { FormFieldset } from "../FormCamp";
import { TitleForm } from "../FormTitle";
import { Label } from "../Label";
import { FormButton } from "../FormButton";
import './event-form-styles.css';
import { SuspenseList } from "../SuspenseList";
import { Suspense } from "react";

export function EventForm({temas}){
  return (
    <form className='form-event' action="">
      <TitleForm> Cadastro de evento </TitleForm>
      <div className="fields">
        <FormFieldset> 
            <Label htmlFor="name"> Nome do evento </Label>
            <Input type="text" id='name' placeholder='Summer dev hits'/>
        </FormFieldset>
        <FormFieldset> 
            <Label htmlFor="imageUrl"> Qual a url da imagem de capa</Label>
            <Input type="text" id='imageUrl' placeholder='http://'/>
        </FormFieldset>
        <FormFieldset> 
            <Label htmlFor="dateEvent"> Data do evento </Label>
            <Input type="date" id='dateEvent' placeholder='Summer dev hits'/>
        </FormFieldset>
        <FormFieldset> 
          <Label htmlFor="themeEvent"> Tema do evento </Label>
          <SuspenseList id="themeEvent" name="themeEvent" itens={temas}/>
        </FormFieldset>
      </div>
      <div className="actions">
        <FormButton type='submit'> Cadastrar </FormButton>
      </div>
    </form>
  );
}