import Footer from "../components/common/Footer";
import TopBar from "../components/common/TopBar";
import ProductCard from "../components/common/ProductCard";
import Girl from "../assets/technology 1.png"
import SideBarNav from "../components/common/SideBarNav";

export default function Landing() {
  return (
    <div className="">
      <TopBar />  

      <SideBarNav />
  
      <section
        id="hero-section"
        className=" flex h-screen bg-white "
      >
        <div className="p-16 flex flex-col gap-3 pt-32 w-1/2">
          <h1 className="text-3xl w-[18ch] text-blue-950 font-extrabold leading-tight">
            Todos tus productos en un sólo lugar!
          </h1>
          <p className="text-lg text-gray-600 w-[50ch] font-light">
            Bienvenido a la plataforma donde encontrarás tus productos favoritos
            y el mejor servicio
          </p>
          <button className="rounded-md p-3 bg-primary-color hover:opacity-80 text-white max-w-[10em] transition-opacity">
            Ver Ofertas
          </button>
        </div>
        <div className="w-1/2 h-auto">
          <img src={Girl} alt="" />
        </div>
      </section>

      <section
        id="oferta-productos"
        className="pt-32 pb-32 bg-primary-color-light"
      >
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-2xl text-blue-950 font-bold">
            Productos en Oferta
          </h3>
          <p className="text-gray-600 text-lg font-light">
            Encuentra los mejores productos y en ofertas únicas
          </p>

          <div id="lista-ofertas" className="flex gap-6 justify-center mt-10">
              <ProductCard />
              <ProductCard />
              <ProductCard />
          </div>

          <button className="rounded-md bg-secondary-color text-white font-bold p-4 w-52 mt-10 mx-auto">
            Todas las ofertas
          </button>
        </div>
      </section>

      <section id="perfil-vendedores" className="py-32 bg-light-blue-color">
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-2xl text-secondary-color font-bold">
            Perfiles de Vendedores
          </h3>
          <p className="text-lg text-gray-600 text-center font-light">
            Vendedores con productos que estás buscando con los mejores precios
          </p>
        </div>
      </section>

      <section id="vender-productos" className="py-32 bg-[var(--dark-blue)]">
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-2xl text-white font-bold">Vende tus Productos</h3>
          <p className="text-base text-white font-light">
            ¿Tienes productos listos para ofrecer? ¡Regístrate y comparte a los
            clientes lo que ellos buscan!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
