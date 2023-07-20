import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import Container from "./Container";
import { useTopBarStore } from "../../stateManagemet/stores";

function TopBar() {
  const { searchBarElement, sideBarNavToglerElement, logoElement, hiddenElements, searchBarToglerElement} = useTopBarStore(state => state)

  return (
    <nav className="bg-primary-color-light relative">
      <Container>
        <div className="flex justify-between items-center">
          {logoElement ? <h3 id="logo" className="text-[32px] font-bold">BrandName</h3> : <></>}
          {searchBarElement ? <SearchBar /> : <></>}
          <div className="text-[32px] text-primary-color flex">
            {
              searchBarToglerElement ? 
              <button onClick={() => desplegarSearchBar()}>
              <FontAwesomeIcon className="mr-3 md:hidden" icon={faMagnifyingGlass} />
              </button>
              : 
              <></>
            }
            {
              sideBarNavToglerElement ? 
              <button id="btnDesplegarMenu" onClick={() => desplegarSideBarNav()}>
                <FontAwesomeIcon icon={faBars} />  
              </button>
              :
              <></>
            }
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
<<<<<<< HEAD
      searchBarElement.classList.add("flex")
=======
>>>>>>> 104990a77462b9b910def7ab07a46f70ac07a479
    }
    hiddenElements(["logoElement", "sideBarNavToglerElement", "searchBarToglerElement"])
  }

}

export default TopBar;
