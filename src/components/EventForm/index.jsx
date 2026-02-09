import { Input } from "../EnterField";
import { FormFieldset } from "../FormCamp";
import { TitleForm } from "../FormTitle";
import { Label } from "../Label";
import { FormButton } from "../FormButton";
import './event-form-styles.css';
import { SuspenseList } from "../SuspenseList";
import { Suspense } from "react";

export function EventForm(){
  return (
    <form className='form-event'>
      <TitleForm> Cadastro de evento </TitleForm>
      <div className="fields">
        <FormFieldset> 
            <Label htmlFor="name"> Nome do evento </Label>
            <Input type="text" id='name' placeholder='Summer dev hits'/>
        </FormFieldset>
        <FormFieldset> 
            <Label htmlFor="dateEvent"> Data do evento </Label>
            <Input type="date" id='dateEvent' placeholder='Summer dev hits'/>
        </FormFieldset>
            <FormFieldset> 
            <Label htmlFor="dateEvent"> Data do evento </Label>
            <SuspenseList/>
        </FormFieldset>
      </div>
      <div className="actions">
        <FormButton type='submit'> Cadastrar </FormButton>
      </div>
    </form>
  );
}