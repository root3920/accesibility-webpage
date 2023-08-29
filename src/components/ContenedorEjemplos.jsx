import "../components/css/contenedor-ejemplo.css"

const oracionesEjemplo = [
    "Bajo el cielo estrellado, susurros de la noche danzan.",
    "Risueño amanecer pinta el horizonte con tonos cálidos.",
    "Pájaros cantan en coro, naturaleza despierta con vida.",
]

export const ContenedorEjemplo = () => {
    return (
        <div className="contenedor-ejemplos">

            <div>
                <h3>Oraciones de Ejemplo:</h3>
                <ul>
                    {oracionesEjemplo.map((oracion, key) => <li key={key}>{oracion}</li>)}
                </ul>
            </div>

            <div>
                <h3>Oraciones en MAYUSCULA:</h3>
                <ul>
                    {oracionesEjemplo.map((oracion, key) => <li key={key}>{oracion.toUpperCase()}</li>)}
                </ul>
            </div>
            <div>
                <h3>Oraciones en minuscula:</h3>
                <ul>
                    {oracionesEjemplo.map((oracion, key) => <li key={key}>{oracion.toLowerCase()}</li>)}
                </ul>
            </div>

        </div>

    );
}