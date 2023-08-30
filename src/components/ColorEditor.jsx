import '../components/css/color-editor.css';
import { useState } from 'react';


const colorToPick = [
    "#691111",
    "#000",
    "#FF0000",
    "#ff8800",
    "#4ba8af",
    "#321556",
    "#8a71a2",
    "#d9a108",
    "#1eb875",
    "#a83890",
    "#bbff00",
    "#ff00a2",
    "#fbff00",
    "#a600ff",
    "#00ff33",
    "#0011ff",

];

export const ColorEditor = () => {
    const [colorContenedor, setColorContenedor] = useState("rgb(0, 0, 0)");

    const pickColor = (e) => setColorContenedor(e.target.style.backgroundColor)



    return (
        <div className='contenedor-principal'>
            <h1 className=''>
                Potencia tu Productividad: Descubre Nuestro Editor de Texto para
                SIMPLIFICAR TU VIDA.
            </h1>
            <div className='contenedor-editor'>
                <div className='contenedor-imagen'>
                    <div className='editable' style={{ backgroundColor: colorContenedor }}></div>
                </div>
                <div className='contenedor-edicion'>
                    <h2>Elige un color:</h2>

                    <input className="input-text" value={colorContenedor} onChange={(e) => setColorContenedor(e.target.value)} />
                    <div className='coontenedor-color-picker'>
                        {colorToPick.map((color, key) => {
                            return <div className='color-picker' key={key} style={{ backgroundColor: color }} onClick={pickColor}></div>
                        })}
                        <input className="color-picker input-color-picker" onChange={(e) => setColorContenedor(e.target.value)} type='color' />
                    </div>

                </div>
            </div>
        </div>
    );


}
