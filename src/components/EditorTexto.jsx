import "../components/css/editor-texto.css"
import { useState } from "react";
import { useResize } from "./hooks/useResize";
import { ContenedorEjemplo } from "./ContenedorEjemplos";



export const EditorTexto = () => {
    const [valor, setValor] = useState("");
    let windowWidth = useResize();

    const sentenceCase = () => setValor(valor[0].toUpperCase() + valor.slice(1, valor.length).toLowerCase());


    return (

        <div className="contenedor-funcionalidad">
            {
                windowWidth > 1028 || window.innerWidth > 1028
                    ? <h1>Potencia tu Productividad:<br /> Descubre Nuestro Editor de Texto <br />para <span>Simplificar tu Vida.</span></h1>
                    : <h1>Potencia tu Productividad:  Descubre Nuestro Editor de Texto para <br /><span>Simplificar tu Vida.</span></h1>
            }

            <form action="">
                <textarea
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
            <ContenedorEjemplo />
        </div >

    );
}
