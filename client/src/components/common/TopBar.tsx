import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import Container from "./Container";

function TopBar() {

  return (
    <nav className="bg-primary-color-light relative">
      <Container>
        <div className="flex justify-between items-center">
          <h3 id="logo" className="text-[32px] font-bold">BrandName</h3>
          <SearchBar />
          <div className="text-[32px] text-primary-color flex"> 
            <button onClick={() => desplegarSearchBar()}>
              <FontAwesomeIcon className="mr-3 md:hidden" icon={faMagnifyingGlass} />
            </button>
            <button id="btnDesplegarMenu" onClick={() => desplegarSideBarNav()}>
              <FontAwesomeIcon icon={faBars} />  
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );

  function desplegarSideBarNav() {
    const sideBarNavElement: HTMLElement | null = document.querySelector("#SideBarNav");
    if(sideBarNavElement) {
      sideBarNavElement.style.right = "0px"
    }
  }

  function desplegarSearchBar() {
    const searchBarElement: HTMLElement | null = document.querySelector("#searchBar");
    if(searchBarElement) {
      searchBarElement.classList.remove("hidden")
    }
  }

}

export default TopBar;
