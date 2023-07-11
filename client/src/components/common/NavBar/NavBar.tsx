import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="flex justify-between">
      <h2>c12-t-node-react</h2>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}

export default NavBar;