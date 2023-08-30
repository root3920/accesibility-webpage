import "../components/css/header-bar.css"
import { useResize } from "../components/hooks/useResize";
import { MenuHamburguesa } from "./MenuHamburguesa";
import { Link } from "react-router-dom";


const subPaginasInfo = [
    {
        nombre: "Editor de texto",
        pathUrl: "/"
    },
    {
        nombre: "Cambio de color",
        pathUrl: "/color-editor"
    },
    {
        nombre: "Información del Creador",
        pathUrl: "/about"
    }
]

export const HeaderBar = () => {
    const windowWidth = useResize();

    return (
        <>
            {
                windowWidth > 1200
                    ? <div className="toolbar">
                        {subPaginasInfo.map((subPagina, key) => {
                            return <Link to={subPagina.pathUrl} key={key} className='toolbar-item'>
                                {subPagina.nombre}
                            </Link>
                        })}
                    </div>
                    : <MenuHamburguesa subPaginasInfo={subPaginasInfo} />
            }
        </>

    );
}
