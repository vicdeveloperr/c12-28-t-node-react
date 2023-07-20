import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <nav className="px-16 py-4 flex gap-4 justify-between items-center w-full bg-primary-color-light">
      <Link to="/">
        <h3 className="font-bold">BrandName</h3>
      </Link>
      <SearchBar />
      <div className="text-primary-color">
        <FontAwesomeIcon className="mr-3 md:hidden" icon={faMagnifyingGlass} />
        <div className="flex gap-2">
          <p>
            <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
