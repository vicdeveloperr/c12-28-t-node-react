import NavBar from "../Components/NavBar/NavBar";
import TopBar from "../Components/TopBar/TopBar";
import { useCounterStore } from "../Store/counterStore";

const Home = () => {
  /* const count = useCounterStore((state) =>state.count) */
  const values = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
  }));

let valores: Object[] = [];

  const ver = async () => {
   await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => valores = json);
    console.log(valores);
  };

  return (
    <div className="w-screen h-screen bg-neutral-700 flex flex-row">
      <NavBar />

      <div className="w-screen h-auto bg-neutral-700 flex flex-col ">
      <TopBar/>
      <div>

    <h1>aca los json</h1>

{/*  {
  valores.map((el)=>{
    return (
    )
  })
} */} 

      </div>



<button onClick={()=>ver()}>VER</button>
      </div>

    </div>
  );
};

export default Home;
