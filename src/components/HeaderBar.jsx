import "../components/css/header-bar.css"

export const HeaderBar = () => {
    return (
        <div className="toolbar">
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
    );
}
