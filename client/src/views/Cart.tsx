import Header from "../components/layouts/Header";
import Footer from "../components/common/Footer";
import CartCard from "../components/common/CartCard";



function Cart() {
  return (
      <>
          <Header />
          <div className="mt-20 px-4 md:px-8 lg:px-16">
                <h1 className="text-h3 text-secondary-color font-extrabold mb-4">Carrito</h1>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-1/2 h-auto p-4 flex flex-col space-y-4">
                <CartCard></CartCard>
                <CartCard></CartCard>
              </div>
              
              <div className="p-4 w-full md:w-1/2">
                <div className="bg-light-blue-color p-4">
                <h1 className="text-h3 text-secondary-color font-extrabold mb-4">Resumen de la compra</h1>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full h-auto">
                        <p className="font-medium text-secondary-color">Cantidad de productos: <span className="font-medium text-secondary-color">2</span></p>
                        <p className="font-medium text-secondary-color">Importe de los productos: <span className="font-medium text-secondary-color text-right">$123.00</span></p>
                        <p className="font-medium text-secondary-color">Gastos de envío: <span className="font-medium text-secondary-color text-right">-</span></p>
                        <h4 className="text-secondary-color font-bold text-h4">Total a pagar: <span className="text-secondary-color font-bold text-h4">$123.00</span></h4>
                    </div>
                </div>
                <button className="rounded-md bg-secondary-color text-white font-bold p-4 mt-4 ">Continuar con la compra</button>
              </div>
              </div>
            </div>  
          </div>
          <div className="my-4"/> 
          <Footer />
      </>
  );
}

export default Cart;