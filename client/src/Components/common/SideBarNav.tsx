import fotoUser from "../../assets/foto-de-perfil.png"
import { faClockRotateLeft, faHouse, faArrowRightFromBracket, faCartShopping, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBarNav() {
    return (
        <aside className="max-w-1/3 fixed p-3 top-0 right-0 flex flex-col justify-between h-screen items-center">
            <div className="flex">
                <img className="rounded max-w-[120px] max-h-[120px] overflow-hidden" src={fotoUser}></img>
                <h4>Ernesto Cabañas</h4>
                <h6>ernestocabañas@gmail.com</h6>
            </div>
            <nav className="flex flex-col text-nav-items">
                <a href="#">
                    <FontAwesomeIcon className="text-primary-color" icon={faUser} />
                    Perfil
                </a>
                <a href="#" className="mt-3">
                    <FontAwesomeIcon className="text-primary-color" icon={faClockRotateLeft} />
                    Historial
                </a>
                <a href="#" className="mt-3">
                    <FontAwesomeIcon className="text-primary-color" icon={faCartShopping} />
                    Carrito
                </a>
                <a href="#" className="mt-3">
                    <FontAwesomeIcon className="text-primary-color" icon={faHeart} />
                    Favoritos
                </a>
                <a href="#" className="mt-3">
                    <FontAwesomeIcon className="text-primary-color" icon={faHouse} />
                    Inicio
                </a>
            </nav>
            <button><FontAwesomeIcon className="text-primary-color text-nav-items" icon={faArrowRightFromBracket} /></button>
        </aside>
    );
}

export default SideBarNav