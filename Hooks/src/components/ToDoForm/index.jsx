import './styles.css';
import { TextInput } from '../TextInput';
import { useState } from 'react';
import {Button } from '../Button';

export function ToDoForm(props) {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(value);
        setValue("");
    }

    return (    
        <form onSubmit={handleSubmit}>
            <TextInput placeholder="Descrição do item" value={value} onChange={handleChange} required />
            <Button> Salvar Item </Button>
        </form>
    );
}