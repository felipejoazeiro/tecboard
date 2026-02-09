import './form-title-styles.css';
// props -> propriedades que são passadas para o componente
export function TitleForm(props){
  return (
    <h2 className="form-title">{props.children}</h2>
  );
}
