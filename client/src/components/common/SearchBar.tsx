import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <form id="searchBar" className="overflow-hidden flex-nowrap text-parrafo hidden md:flex max-w-[550px] min-w-0 right-0 m-auto">
      <input
        className="rounded-s-lg overflow-hidden p-2 focus:outline-none bg-white-color flex-shrink"
        placeholder="Buscar.."
        type="text"
        name="producto"
        id="producto"
      />
      <select className="py-2 px-1 focus:outline-none bg-white-color border-l-2 border-primary-color min-w-0 flex-shrink-0">
        <option>Categoria</option>
      </select>
      <button className="bg-primary-color p-3 rounded-r flex-shrink-0">
        <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchBar;
