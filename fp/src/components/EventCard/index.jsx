import './event-card-styles.css'

export function EventCard({ eventos }) {
    return (
        <div className="event-card">
            <img src={eventos.capa} alt={eventos.titulo} />
            <div className="body">
                <p className="tag">
                    {eventos.tema.name}
                </p>
                <p className='data'>
                    {eventos.data.toLocaleDateString("pt-BR")}
                </p>
                <h4 className='title'>
                    {eventos.titulo}
                </h4>
            </div>
        </div>
    );
}