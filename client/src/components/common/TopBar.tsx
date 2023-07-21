import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import Container from "./Container";
import { create } from "zustand";

type elementsInTopBarElement = "sideBarNavToglerElement" | "logoElement" | "searchBarElement" | "searchBarToglerElement";
type topBarStore = {
    sideBarNavToglerElement: boolean,
    logoElement: boolean,
    searchBarToglerElement: boolean,
    searchBarElement: boolean,
    hiddenElements: (elements: Array<elementsInTopBarElement>) => void,
    showElements: (elements: Array<elementsInTopBarElement>) => void
}
const useTopBarStore = create<topBarStore>()((set) => ({
    sideBarNavToglerElement: true,
    searchBarToglerElement: true,
    logoElement: true,
    searchBarElement: true,
    hiddenElements: (elements) => set(() => {
        const elementsVisible = {
            sideBarNavToglerElement: true,
            logoElement: true,
            searchBarElement: true,
            searchBarToglerElement: true
        }

        elements.map((element) => {
            if(element in elementsVisible){
                elementsVisible[element] = false;
            }
        })

        return elementsVisible
    }),
    showElements: (elementsToHide) => set(() => {
            const elements = {
                sideBarNavToglerElement: true,
                logoElement: true,
                searchBarElement: true,
                searchBarToglerElement: true
            }
    
            elementsToHide.map((element) => {
                if(element in elements){
                    elements[element] = false;
                }
            })
    
            return elements
    })
}));

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
      searchBarElement.classList.add("flex")
    }
    hiddenElements(["logoElement", "sideBarNavToglerElement", "searchBarToglerElement"])
  }

}

export default TopBar;
