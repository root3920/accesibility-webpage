import "../components/css/editor-texto.css"
import { useState } from "react";
import { useResize } from "./hooks/useResize";



export const EditorTexto = () => {
    const [valor, setValor] = useState("");
    let windowWidth = useResize();

    const sentenceCase = () => setValor(valor[0].toUpperCase() + valor.slice(1, valor.length).toLowerCase());


    return (

        <div className="contenedor-funcionalidad">
            {
                windowWidth > 1028
                    ? <h1>Potencia tu Productividad:<br /> Descubre Nuestro Editor de Texto <br />para <span>Simplificar tu Vida</span></h1>
                    : <h1>Potencia tu Productividad:  Descubre Nuestro Editor de Texto para <br /><span>Simplificar tu Vida</span></h1>
            }

            <form action="">
                <input
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    type="text" />
            </form>
            <div className="contenedor-botones">
                <button className="button-9" onClick={() => setValor(valor.toUpperCase())}>UPPERCASE</button>
                <button className="button-9" onClick={() => setValor(valor.toLowerCase())}>lowercase</button>
                <button className="button-9" onClick={sentenceCase}>Sentence case</button>
            </div>

            <button className="button-9" style={{ backgroundColor: "red" }} onClick={() => setValor("")}>Borrar</button>
            <div className="contenedor-ejemplos">
                <div>
                    <h3>Oraciones Uppercase:</h3>
                    <ul>
                        <li>
                            BAJO EL CIELO ESTRELLADO, SUSURROS DE LA NOCHE DANZAN.
                        </li>
                        <li>
                            RISUEÑO AMANECER PINTA EL HORIZONTE CON TONOS CÁLIDOS.
                        </li>

                        <li>
                            PÁJAROS CANTAN EN CORO, NATURALEZA DESPIERTA CON VIDA.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Oraciones lowercase:</h3>
                    <ul>
                        <li>
                            bajo el cielo estrellado, susurros de la noche danzan.
                        </li>
                        <li>
                            risueño amanecer pinta el horizonte con tonos cálidos.
                        </li>

                        <li>
                            pájaros cantan en coro, naturaleza despierta con vida.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Oraciones de Ejemplo:</h3>
                    <ul>
                        <li>
                            Bajo el cielo estrellado, susurros de la noche danzan.
                        </li>
                        <li>
                            Risueño amanecer pinta el horizonte con tonos cálidos.
                        </li>

                        <li>
                            Pájaros cantan en coro, naturaleza despierta con vida.
                        </li>
                    </ul>
                </div>

            </div>

        </div >

    );
}
