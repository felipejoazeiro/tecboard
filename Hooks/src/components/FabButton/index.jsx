import './fab-button.style.css'

export function FabButton({ children, ...rest }) {
    return (
        <button className='fab' type="button" {...rest}>
            {children}
        </button>
    )
}