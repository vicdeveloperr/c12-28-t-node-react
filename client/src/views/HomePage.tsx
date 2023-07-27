import Header from "../components/layouts/Header";
import { useUserStore } from "../stateManagemet/useUserStore";

function HomePage() {
  const loggedUser = useUserStore(state => state.user);
  console.log(loggedUser);

  return (
    <>
      <Header />
      <h1 className="text-3xl text-blue-950 font-extrabold leading-snug">
        Home
      </h1>
      {JSON.stringify(loggedUser)}
    </>
  );
}

export default HomePage;
