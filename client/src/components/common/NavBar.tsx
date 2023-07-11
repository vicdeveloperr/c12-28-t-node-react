import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import Container from "./Container";

function NavBar() {
  let NavBarContent =
    <nav className="flex justify-between items-center">
      <h3 className="text-[32px] font-bold">BrandName</h3>
      <SearchBar />
      <div className="text-[32px] text-primary-color">
        <FontAwesomeIcon className="mr-3 md:hidden" icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>

  return (<Container content={NavBarContent} />);
}

export default NavBar;