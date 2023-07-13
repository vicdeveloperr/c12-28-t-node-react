import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <form className="overflow-hidden text-parrafo hidden md:inline-block max-w-[450px]">
      <input
        className="rounded-s-lg p-2 focus:outline-none bg-white-color"
        placeholder="Buscar.."
        type="text"
        name="producto"
        id="producto"
      />
      <select className="py-2 px-1 focus:outline-none bg-white-color border-l-2 border-primary-color">
        <option>Categoria</option>
      </select>
      <button className="bg-primary-color p-2 rounded-e-lg">
        <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchBar;
