import "../components/css/menu-hamburguesa.css"
import { Link } from "react-router-dom";

let menuHamburguesaActivo = false;



const hamburguesaOnClick = (menuActivo) => {
    let rayasHorizontalesHamburguesa = document.querySelectorAll(".raya-horizontal");
    let arrayRayasHorizontales = [...rayasHorizontalesHamburguesa]
    let menuDesplegable = document.querySelector(".menu-desplegable")

    if (!menuActivo) {

        //Desplega el sub-menu
        menuHamburguesaActivo = true;
        menuDesplegable.style.display = "flex";

        arrayRayasHorizontales.forEach((e) => {
            if (e.id == "inicio") e.classList.add("hamburguesa-clic-inicio");

            if (e.id == "mitad") e.style.borderBottom = "solid white 3px";

            if (e.id == "final") e.classList.add("hamburguesa-clic-final");
        })

    } else {

        //Oculta el sub-menu
        menuHamburguesaActivo = false;
        menuDesplegable.style.display = "none";

        arrayRayasHorizontales.forEach((e) => {
            if (e.id == "inicio") e.classList.remove("hamburguesa-clic-inicio");

            if (e.id == "mitad") e.style.borderBottom = "solid black 3px";

            if (e.id == "final") e.classList.remove("hamburguesa-clic-final");
        })
    }
}




export const MenuHamburguesa = ({ subPaginasInfo }) => {


    return (
        <>
            <div className="hamburguesa" onClick={() => hamburguesaOnClick(menuHamburguesaActivo)}>
                <div className="raya-horizontal" id="inicio"> {""} </div>
                <div className="raya-horizontal" id="mitad"> {""} </div>
                <div className="raya-horizontal" id="final"> {""} </div>
            </div>
            <div className="menu-desplegable">
                {subPaginasInfo.map((subPagina, key) => {
                    return <Link to={subPagina.pathUrl} key={key} className='menu-desplegable-item'>
                        {subPagina.nombre}
                    </Link>
                })}
            </div>
        </>

    );
}

