import { Link } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/common/Footer";


import { Carousel, Rating } from 'flowbite-react';

function Detail() {
  return (
      <>
          <Header />
          <div className="mt-20 px-16 space-x-8">
            <div className="flex">
              <div className="w-1/2 h-96 p-4">
                  <Carousel>
                      <img className="w-full h-auto" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Imagen 1" />
                      <img className="w-full h-auto" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Imagen 2" />
                      <img className="w-full h-auto" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80ruta-a-la-imagen-3.jpg" alt="Imagen 3" />
                  </Carousel>
              </div>
              <div className="w-1/2 p-4">
                  <h2 className="text-xg text-blue-950 font-extrabold">Nombre del producto</h2>
                  <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur lorem at semper maximus. Nullam iaculis viverra ultricies.</p>
                  <Rating size="md" className="mt-2">
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                    <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white" href="#">
                      <p>73 reseñas</p>
                    </a>
                  </Rating>
                 <div className="flex justify-between mt-2"> 
                  <div className="text-xg text-blue-950 font-extrabold">$1235</div>
                 <div>
                 <button className="rounded-md bg-blue-950 text-white font-bold p-4 w-44 mx-auto">Agregar al carrito</button>
                 </div>
                 </div>
                 <div className="mt-2 justify-end">
                  <Link to="" className="text-right underline hover:no-underline"><h1>Métodos de pago</h1></Link>
                  <Link to="" className="text-right underline hover:no-underline"><h1>Ver detalles de envío</h1></Link>
                 </div>
              </div>
              </div>  
          </div>
          <div className="my-96">   </div>
          <Footer />
      </>
  );
}

export default Detail;

  