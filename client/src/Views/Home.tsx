import NavBar from "../Components/NavBar/NavBar";
import TopBar from "../Components/TopBar/TopBar";
import { useCounterStore } from "../Store/counterStore";

const Home = () => {
  /* const count = useCounterStore((state) =>state.count) */
  const values = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
  }));
  return (
    <div className="w-screen h-screen bg-neutral-700 flex flex-row">
      <NavBar />

      <div className="w-screen h-auto bg-neutral-700 flex flex-col ">
      <TopBar/>
      <h1 className="text-3xl font-bold ">
        Hello world!
        <h1>count: {values.count}</h1>
        <h1>title: {values.title}</h1>
      </h1>
      </div>



    </div>
  );
};

export default Home;
