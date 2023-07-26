import Header from "../components/layouts/Header";
import { userStore } from "../stateManagemet/stores";

function HomePage() {
  const loggedUser = userStore(state => state.user);
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
