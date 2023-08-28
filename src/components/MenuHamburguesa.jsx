import "../components/css/menu-hamburguesa.css"

let menuHamburguesaActivo = false;



const hamburguesaOnClick = (menuActivo) => {
    let hamburguesa = document.querySelectorAll(".raya-horizontal");
    let arrayRayasHorizontales = [...hamburguesa]
    let mitadRayaHorizontal = document.querySelector("#mitad");


    if (!menuActivo) {
        menuHamburguesaActivo = true;

        arrayRayasHorizontales.forEach((e) => {
            if (e.id == "inicio")
                e.classList.add("hamburguesa-clic-inicio");

            if (e.id == "final")
                e.classList.add("hamburguesa-clic-final");

        })

        mitadRayaHorizontal.style.borderBottom = "solid white 3px";
        menuHamburguesaActivo = true


    } else {
        mitadRayaHorizontal.style.borderBottom = "solid black 3px";
        menuHamburguesaActivo = false

        arrayRayasHorizontales.forEach((e) => {
            if (e.id == "inicio")
                e.classList.remove("hamburguesa-clic-inicio");

            if (e.id == "final")
                e.classList.remove("hamburguesa-clic-final");

        })
    }



}




export const MenuHamburguesa = () => {


    return (
        <div className="hamburguesa" onClick={() => hamburguesaOnClick(menuHamburguesaActivo)}  >
            <div className="raya-horizontal" id="inicio">
                {""}
            </div>
            <div className="raya-horizontal" id="mitad">
                {""}

            </div>
            <div className="raya-horizontal" id="final">
                {""}

            </div>

        </div>
    );
}

