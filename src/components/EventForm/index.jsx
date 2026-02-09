import { Input } from "../EnterField";
import { FormFieldset } from "../FormCamp";
import { TitleForm } from "../FormTitle";
import { Label } from "../Label";
import { FormButton } from "../FormButton";
import './event-form-styles.css';
import { SuspenseList } from "../SuspenseList";
import { Suspense } from "react";

export function EventForm({temas, onSubmit}) {

  function formSubmit(formData) {
    //event.preventDefault();
    const event = {
      capa: formData.get('capa'),
      tema: temas.find(t => t.id === Number(formData.get('themeEvent'))),
      data: new Date(formData.get('dateEvent')),
      titulo: formData.get('name')
    }
    onSubmit(event);
  }

  return (
    <form className='form-event' action={formSubmit}>
      <TitleForm> Cadastro de evento </TitleForm>
      <div className="fields">
        <FormFieldset> 
              <Label htmlFor="name"> Nome do evento </Label>
              <Input type="text" id='name' name='name' placeholder='Summer dev hits'/>
        </FormFieldset>
        <FormFieldset> 
              <Label htmlFor="imageUrl"> Qual a url da imagem de capa</Label>
              <Input type="text" id='imageUrl' name='capa' placeholder='http://'/>
        </FormFieldset>
        <FormFieldset> 
              <Label htmlFor="dateEvent"> Data do evento </Label>
              <Input type="date" id='dateEvent' name='dateEvent' placeholder='Summer dev hits'/>
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