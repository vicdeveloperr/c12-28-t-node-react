import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    return (
        <form className="overflow-hidden text-parrafo rounded border-solid border-2 border-[#E6E6E6] hidden md:inline-block max-w-[450px]">
            <input className="p-3 focus:outline-none" placeholder="Buscar.." type="text" name="producto" id="producto" />
            <select className="border-l-solid border-l-2 border-[#E6E6E6] py-3 pl-3 mr-3 focus:outline-none">
                <option>Categoria</option>
            </select>
            <button className="bg-primary-color p-3">
                <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />
            </button>
        </form>
    );
}

export default SearchBar