import Footer from "../components/common/Footer";
import Header from "../components/layouts/Header";

export default function Landing() {
  return (
    <>
      <Header />

      <section
        id="hero-section"
        className=" flex flex-col gap-4 h-screen bg-white "
      >
        <div className="p-16 flex flex-col gap-3 pt-32 w-1/2">
          <h1 className="text-3xl w-[18ch] text-blue-950 font-extrabold leading-snug">
            Todos tus productos en un sólo lugar!
          </h1>
          <p className="text-xl text-gray-600">
            Bienvenido a la plataforma donde encontrarás tus productos favoritos
            y el mejor servicio
          </p>
          <button className="rounded-sm p-3 bg-red-500 text-white max-w-xs">
            Ver Ofertas
          </button>
        </div>
        <img src="" alt="" />
      </section>

      <section
        id="oferta-productos"
        className="pt-32 pb-32 bg-[var(--primary-color-light)"
      >
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-4xl text-[var(--primary-color)] font-bold">
            Productos en Oferta
          </h3>
          <p className="text-gray-600 text-xl font-light">
            Encuentra los mejores productos y en ofertas únicas
          </p>

          <div id="lista-ofertas" className="flex gap-6 justify-center mt-10">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <button className="rounded-md bg-blue-950 text-white font-bold p-4 w-52 mt-10 mx-auto">
            Todos las ofertas
          </button>
        </div>
      </section>

      <section id="perfil-vendedores" className="py-32 bg-[var(--light-blue)]">
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-3xl text-blue-900 font-bold">
            Perfiles de Vendedores
          </h3>
          <p className="text-base text-gray-600 text-center ">
            Venedores con productos que estás buscando con los mejores precios
          </p>
        </div>
      </section>

      <section id="vender-productos" className="py-32 bg-[var(--dark-blue)]">
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-3xl text-white font-bold">Vende tus Productos</h3>
          <p className="text-base text-white">
            ¿Tienes productos listos para ofrecer? ¡Regístrate y comparte a los
            clientes lo que ellos buscan!
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
