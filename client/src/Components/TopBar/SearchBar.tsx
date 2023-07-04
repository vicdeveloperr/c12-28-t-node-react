import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="px-1.5
    flex justify-evenly
    gap-1
    border border-gray-400
    rounded-full">
      <div
        className="
  px-3 py-1
  rounded-full
  border border-gray-700
  text-center
  bg-white
  w-80
  cursor-pointer
  text-lg
  "
      >
        <button className="rounded-lg
cursor-pointer" type="submit">
          <BiSearch className="lupa" size={30} />
        </button>
        <input className="search" type="text" />
      </div>
    </div>
  );
};

export default SearchBar;
