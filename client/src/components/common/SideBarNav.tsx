import fotoUser from "../../assets/foto-de-perfil.webp";
import {
  faStore,
  faArrowRightFromBracket,
  faCartShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../stateManagemet/useUserStore";

function SideBarNav() {
  const sideBarNavRef = useRef<HTMLElement>(null);
  const { userData } = useUserStore(state => state);

  useEffect(() => {
    if (sideBarNavRef.current) {
      const sideBarNavWidth = sideBarNavRef.current.clientWidth;
      sideBarNavRef.current.style.right = `-${sideBarNavWidth}px`;
    }
  }, []);

  return (
    <aside
      ref={sideBarNavRef}
      id="SideBarNav"
      className="bg-primary-color-light max-w-1/3 fixed px-7 py-5 top-0 flex-col justify-between h-screen items-center hidden"
    >
      <div className="flex">
        <img
          className="rounded max-w-[100px] max-h-[100px] overflow-hidden"
          src={fotoUser}
        ></img>
        <div className="text-h3 ml-3 h-full flex-col justify-center hidden md:flex">
          <h4 className="font-bold">{`${userData.firstName} ${userData.lastName}`}</h4>
          <h6>{userData.email}</h6>
        </div>
      </div>
      <nav className="flex flex-col text-nav-items">
        <NavItem
          marginTop={false}
          targetUrl="/profile"
          iconComponent={
            <FontAwesomeIcon className="text-primary-color" icon={faUser} />
          }
          linkName="Perfil"
        />
        <NavItem
          targetUrl="/cart"
          iconComponent={
            <FontAwesomeIcon
              className="text-primary-color"
              icon={faCartShopping}
            />
          }
          linkName="Carrito"
        />
        <NavItem
          targetUrl="/favorites"
          iconComponent={
            <FontAwesomeIcon className="text-primary-color" icon={faHeart} />
          }
          linkName="Favoritos"
        />
        <NavItem
          targetUrl="/products"
          iconComponent={
            <FontAwesomeIcon icon={faStore} className="text-primary-color" />
          }
          linkName="Productos"
        />
      </nav>
      <button className="text-nav-items">
        <FontAwesomeIcon
          className="text-primary-color"
          icon={faArrowRightFromBracket}
        />
        <span className="ml-3 font-light hidden md:inline-block">
          Cerrar sesión
        </span>
      </button>
    </aside>
  );

  function NavItem({
    targetUrl,
    linkName,
    iconComponent,
    marginTop = true,
  }: {
    targetUrl: string;
    linkName: string;
    iconComponent: JSX.Element;
    marginTop?: boolean;
  }) {
    return (
      <Link
        to={targetUrl}
        className={marginTop ? "mt-5 font-light" : "font-light"}
      >
        {iconComponent}
        <span className="ml-3 hidden md:inline-block">{linkName}</span>
      </Link>
    );
  }
}

export default SideBarNav;
