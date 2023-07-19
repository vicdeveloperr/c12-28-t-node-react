import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import ProductCard from "../components/common/ProductCard";
import Girl from "../assets/technology 1.png"

// function ProductCard() {
//   return (
//     <div className="rounded-md  bg-white w-80 shadow-sm">
//       <img
//         src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
//         alt="Auriculares en fondo amarillo"
//         className="rounded-t-md"
//       />
//       <div className="flex flex-col gap-2 items-center p-4">
//         <h4 className="text-gray-900">Auriculares</h4>
//         <p className="text-gray-600 font-light">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
//           tenetur esse aliquam asperiores numquam laboriosam omnis eius aut
//           quisquam, minima labore voluptas ad! Quas ab in quaerat velit cumque
//           repellendus!
//         </p>
//         <small className="font-semibold">
//           <strong>10 Disponibles</strong>
//         </small>
//         <p className="text-gray-900">
//           <strong>$10.000</strong>
//         </p>
//         <button className="rounded-2xl py-2 px-5 border border-blue-950 text-blue-950 mt-10">
//           Leer más
//         </button>
//       </div>
//     </div>
//   );
// }

export default function Landing() {
  return (
    <div className="">
      <NavBar />
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
        className="pt-32 pb-32 bg-[var(--primary-color-light)"
      >
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-2xl text-tertiary-color font-bold">
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

          <button className="rounded-md bg-blue-950 text-white font-bold p-4 w-52 mt-10 mx-auto">
            Todas las ofertas
          </button>
        </div>
      </section>

      <section id="perfil-vendedores" className="py-32 bg-light-blue-color">
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-2xl text-tertiary-color font-bold">
            Perfiles de Vendedores
          </h3>
          <p className="text-lg text-gray-600 text-center font-light">
            Venedores con productos que estás buscando con los mejores precios
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
