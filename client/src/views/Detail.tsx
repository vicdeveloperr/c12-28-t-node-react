import { Link } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";

import { Carousel, Rating } from "flowbite-react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Detail() {
  return (
    <>
      <Header />
      <div className="mt-20 px-16 space-x-8">
        <div className="flex">
          <div className="w-1/2 h-96 p-4">
            <Carousel>
              <img
                className="w-full h-auto"
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Imagen 1"
              />
              <img
                className="w-full h-auto"
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Imagen 2"
              />
              <img
                className="w-full h-auto"
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80ruta-a-la-imagen-3.jpg"
                alt="Imagen 3"
              />
            </Carousel>
          </div>
          <div className="w-1/2 p-4 bg-light-blue-color">
            <h2 className="text-h3 text-secondary-color font-extrabold">
              Nombre del producto
            </h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur lorem at semper maximus. Nullam iaculis viverra
              ultricies.
            </p>
            <Rating size="md" className="mt-2">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
              <a
                className="text-sm font-medium text-secondary-color underline hover:no-underline dark:text-white"
                href="#"
              >
                <p>73 reseñas</p>
              </a>
            </Rating>
            <div className="flex justify-between mt-2">
              <div className="text-xg text-secondary-color font-extrabold">
                $1235
              </div>
              <div>
                <button className="rounded-md bg-secondary-color text-white font-bold p-4 w-44 mx-auto">
                  Agregar al carrito
                </button>
              </div>
            </div>
            <div className="mt-2 justify-end">
              <Link to="" className="text-right underline hover:no-underline">
                <h1>Métodos de pago</h1>
              </Link>
              <Link to="" className="text-right underline hover:no-underline">
                <h1>Ver detalles de envío</h1>
              </Link>
            </div>

            <div className="flex justify-between mt-10">
              <div>
                <h4 className="text-h4 font-extrabold">Vendido por</h4>
                <h4 className="text-h5 font-medium">Nombre del vendedor</h4>
                <div className="flex">
                  <FontAwesomeIcon
                    className="text-h5 text-secondary-color m-1"
                    icon={faUser}
                  />
                  <h4 className="text-h5 font-medium ml-1">4.2</h4>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <Button color="secondary-color" className="">
                  Contactar al vendedor
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-h4 font-extrabold mt-10">Características</h4>
              <h4 className="text-h4 font-extrabold">Tipo1</h4>
              <h4 className="text-h5 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4" />
      <Footer />
    </>
  );
}

export default Detail;
