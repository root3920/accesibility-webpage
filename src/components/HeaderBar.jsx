import "../components/css/header-bar.css"
import { useResize } from "../components/hooks/useResize";
import { MenuHamburguesa } from "./MenuHamburguesa";

export const HeaderBar = () => {
    const windowWidth = useResize();
    return (
        <>
            {
                windowWidth > 1200
                    ? <div className="toolbar">
                        <a onClick={() => location.reload()} className='toolbar-item'>
                            Editor de texto
                        </a>
                        <a onClick={() => location.reload()} className='toolbar-item'>
                            Cambio de color
                        </a>
                        <a onClick={() => location.reload()} className='toolbar-item'>
                            Integrantes del grupo
                        </a>
                    </div>
                    : <MenuHamburguesa />
            }
        </>

    );
}
