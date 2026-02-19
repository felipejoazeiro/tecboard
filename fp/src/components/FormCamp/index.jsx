import './form-fieldset-styles.css'


export function FormFieldset({children}){
  return (
    <fieldset className='form-fieldset'>
        {children}
    </fieldset>
  );
}
