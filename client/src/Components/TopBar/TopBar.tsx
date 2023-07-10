import SearchBar from "./SearchBar";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom" 

const TopBar = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-row w-full bg-black justify-center">
      <div
        className="
    flex justify-between items-center flex-row
    h-24
    p-10 bg-red-800 w-full" 
      >
        <SearchBar />
        <div className="cursor-pointer">
        <BiCart size={35} />
        </div>
        <button onClick={ () => navigate("/register")}>Login</button>
      </div>
    </div>
  );
};

export default TopBar;
