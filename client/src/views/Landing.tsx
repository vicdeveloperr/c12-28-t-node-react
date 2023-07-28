import Footer from "../components/common/Footer";
import TopBar from "../components/common/TopBar";
import ProductCard from "../components/common/ProductCard";
import Girl from "../assets/technology 1.png";
import SideBarNav from "../components/common/SideBarNav";
import { Link } from "react-router-dom";
import { useProductStore } from "../stateManagemet/useProductStore";

export default function Landing() {
  const { allProducts } = useProductStore(state => state);
  return (
    <div className="">
      <TopBar />

      <SideBarNav />
  
      <section id="hero-section" className="flex flex-col lg:flex-row h-screen bg-white">
        <div className="p-6 lg:p-16 flex flex-col gap-3 pt-16 lg:pt-32 w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl w-full text-secondary-color font-extrabold leading-tight">
            Todos tus productos en un sólo lugar!
          </h1>
          <p className="text-base lg:text-lg xl:text-xl text-gray-600 w-full lg:w-[50ch] font-light">
            Bienvenido a la plataforma donde encontrarás tus productos favoritos y el mejor servicio
          </p>
          <Link to="/products">
          <button className="rounded-md p-3 lg:p-4 bg-primary-color hover:opacity-80 text-white w-full lg:max-w-[10em] transition-opacity">
            Ver productos
          </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 h-auto">
          <img className="w-full h-auto" src={Girl} alt="" />
        </div>
      </section>

      <section
        id="oferta-productos"
        className="pt-32 pb-32 bg-primary-color-light"
      >
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-nav-items text-secondary-color font-bold">
            Productos en Oferta
          </h3>
          <p className="text-gray-600 text-lg font-light">
            Encuentra los mejores productos y en ofertas únicas
          </p>
          <div className="justify-center mx-auto">
          <div id="lista-ofertas" className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {
                allProducts.slice(0, 3).map(product => {
                  return (
                    <ProductCard category={product.category.name} description={product.description} id={product.idProduct} name={product.name} price={product.price} stock={product.stock} key={product.idProduct} />
                  ); 
                })
              }
          </div>
          </div>

          <button className="rounded-md bg-secondary-color text-white font-bold p-4 w-52 mt-10 mx-auto">
            Todas las ofertas
          </button>
        </div>
      </section>

      <section id="perfil-vendedores" className="py-32 bg-light-blue-color">
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-nav-items text-secondary-color font-bold">
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
