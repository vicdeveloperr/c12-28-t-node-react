import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useCategories } from "../../stateManagemet/useCategories";

function SearchBar() {
  const categories = useCategories(state => state.categories);

  return (
    <form
      id="searchBar"
      className="overflow-hidden flex-nowrap text-parrafo hidden md:flex max-w-[550px] min-w-0 right-0 m-auto"
    >
      <input
        className="rounded-s-lg overflow-hidden p-2 focus:outline-none bg-white-color flex-shrink"
        placeholder="Buscar.."
        type="text"
        name="producto"
        id="producto"
      />
      <select className="py-2 px-1 focus:outline-none bg-white-color border-l-2 border-primary-color min-w-0 flex-shrink-0">
        <option>Categoria</option>
        {categories?.map(category => (
          <option key={category.idCategory} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button className="bg-primary-color p-3 rounded-r flex-shrink-0">
        <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchBar;
