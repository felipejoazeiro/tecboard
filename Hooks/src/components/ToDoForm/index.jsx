import './styles.css';
import { TextInput } from '../TextInput';
import {Button } from '../Button';

export function ToDoForm({ onSubmit }) {
    return (    
        <form onSubmit={onSubmit}>
            <TextInput placeholder="Descrição do item" />
            <Button> Salvar Item </Button>
        </form>
    );
}