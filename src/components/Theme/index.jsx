import './theme-styles.css'

export function Theme({ theme }) {
    return (
        <h3 className="title-theme">{theme.name}</h3>
    )
}