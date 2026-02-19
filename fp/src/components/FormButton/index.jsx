import './form-button-styles.css';

export function FormButton({ children, ...rest }) {
  return (
    <button className='form-button' {...rest}>
      {children}
    </button>
  );
}