import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useProductStore } from "../../stateManagemet/useProductStore";
import { useCategoriesStore } from "../../stateManagemet/useCategoriesStore";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const categories = useCategoriesStore(state => state.categories);
  const setSearch = useProductStore(state => state.setSearch);
  const navigate = useNavigate();

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
        onChange={e => {
          setSearch(e.target.value);
          navigate("/products");
        }}
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
