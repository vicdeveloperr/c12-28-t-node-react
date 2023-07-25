
import Header from "../components/layouts/Header";
import Footer from "../components/common/Footer";
import Input from "../components/common/Input";
import { Carousel } from 'flowbite-react';

function Detail() {
  return (
      <>
          <Header />
          <div className="mt-20 px-16 space-x-8">
            <h1 className="text-h3 text-secondary-color font-extrabold mb-4">Crear producto</h1>
            <div className="flex">
              <div className="w-1/2 h-96 p-4">
                  <Carousel>
                      <img className="w-full h-auto" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Imagen 1" />
                      <img className="w-full h-auto" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Imagen 2" />
                      <img className="w-full h-auto" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80ruta-a-la-imagen-3.jpg" alt="Imagen 3" />
                  </Carousel>
              </div>
              <div className="w-1/2 p-4 bg-light-blue-color">
                  <h2 className="text-h4 text-secondary-color font-extrabold">Nombre del producto</h2>
                  <Input color="secondary-color" inputId="" inputName=""></Input>
                  <h2 className="text-h4 text-secondary-color font-extrabold mt-3">Precio</h2>
                  <Input color="secondary-color" inputId="" inputName=""></Input>
                  <h2 className="text-h4 text-secondary-color font-extrabold mt-3">Descripción</h2>
                  <Input color="secondary-color" inputId="" inputName=""></Input>
                  <h2 className="text-h4 text-secondary-color font-extrabold mt-3">Categoría</h2>
                  <Input color="secondary-color" inputId="" inputName=""></Input>
                  <h2 className="text-h4 text-secondary-color font-extrabold mt-3">Características</h2>
                    <h4 className="text-h5 font-medium">Elije hasta 10 características</h4>
                    <h4 className="text-h5 font-extrabold">Tipo 1</h4>
                    <div className="flex gap-3">
                    <Input color="secondary-color" inputId="" inputName=""></Input>
                    <Input color="secondary-color" inputId="" inputName=""></Input>
                    </div>

                    <h4 className="text-h5 font-extrabold mt-2">Tipo 2</h4>
                    <div className="flex gap-3">
                    <Input color="secondary-color" inputId="" inputName=""></Input>
                    <Input color="secondary-color" inputId="" inputName=""></Input>
                    </div>
                  <h2 className="text-h4 text-secondary-color font-extrabold mt-3">Cantidad</h2>
                  <Input color="secondary-color" inputId="" inputName=""></Input>
                  <button className="rounded-md bg-secondary-color text-white font-bold p-4 w-44 mt-3 ">Crear producto</button>
                 
                
                    
                 </div>
             </div>
            </div>
             
              
          <div className="my-4"/> 
          <Footer />
      </>
  );
}

export default Detail;

  