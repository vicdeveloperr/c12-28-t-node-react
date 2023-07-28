import Footer from "../components/common/Footer";
<<<<<<< HEAD
import CartCard from "../components/common/CartCard";
import axios from "axios";
import TopBar from "../components/common/TopBar";
import SideBarNav from "../components/common/SideBarNav";
import { useCartStore } from "../stateManagemet/useCartStore";
import { SERVER_URL } from "../utils/constants";
=======
//import CartCard from "../components/common/CartCard";
>>>>>>> 7e945b05ddc1110c3391202a96e366ba2267abf7

function Cart() {
  
    const cartState = useCartStore();
        console.log(cartState.cartItems);
 
    const totalQuantity = cartState.cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartState.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    
    const removeFromCart = (productId: number) => {
        cartState.removeFromCart(productId);
      };

    const handleCheckout = async () => {
        try {
          // Envía la información del carrito y el monto total al backend para crear la orden de pago
          const response = await axios.post(`${SERVER_URL}/create-order`, {
            items: cartState.cartItems,
            totalAmount: totalPrice,
          });
    
          // Redirige al usuario a la URL de pago de Mercado Pago
          window.location.href = response.data.init_point;
        } catch (error) {
          console.error("Error al crear la orden de pago:", error);
        }
      };

  return (
<<<<<<< HEAD
      <>
          <TopBar />
          <SideBarNav/>
          <div className="mt-20 px-4 md:px-8 lg:px-16">
                <h1 className="text-h3 text-secondary-color font-extrabold mb-4">Carrito</h1>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-1/2 h-auto p-4 flex flex-col space-y-4">
                {cartState.cartItems.map((cartItem) => (
                <CartCard 
                    key={cartItem.product.idProduct} 
                    cartItem={cartItem} 
                    removeFromCart={removeFromCart} />
                ))}
              </div>
              
              <div className="p-4 w-full md:w-1/2">
                <div className="bg-light-blue-color p-4">
                <h1 className="text-h3 text-secondary-color font-extrabold mb-4">Resumen de la compra</h1>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full h-auto">
                        <p className="font-medium text-secondary-color">Cantidad de productos: <span className="font-medium text-secondary-color">{totalQuantity}</span></p>
                        <p className="font-medium text-secondary-color">Importe de los productos: <span className="font-medium text-secondary-color text-right">${totalPrice.toFixed(2)}</span></p>
                        <p className="font-medium text-secondary-color">Gastos de envío: <span className="font-medium text-secondary-color text-right">-</span></p>
                        <h4 className="text-secondary-color font-bold text-h4">Total a pagar: <span className="text-secondary-color font-bold text-h4">${totalPrice.toFixed(2)}</span></h4>
                    </div>
                </div>
                <button className="rounded-md bg-secondary-color text-white font-bold p-4 mt-4 " onClick={handleCheckout}>Continuar con la compra</button>
              </div>
              </div>
            </div>  
=======
    <>
      <Header />
      <div className="mt-20 px-4 md:px-8 lg:px-16">
        <h1 className="text-h3 text-secondary-color font-extrabold mb-4">
          Carrito
        </h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-1/2 h-auto p-4 flex flex-col space-y-4">
            {/*<CartCard></CartCard>*/}
            {/*<CartCard></CartCard>*/}
>>>>>>> 7e945b05ddc1110c3391202a96e366ba2267abf7
          </div>

          <div className="p-4 w-full md:w-1/2">
            <div className="bg-light-blue-color p-4">
              <h1 className="text-h3 text-secondary-color font-extrabold mb-4">
                Resumen de la compra
              </h1>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full h-auto">
                  <p className="font-medium text-secondary-color">
                    Cantidad de productos:{" "}
                    <span className="font-medium text-secondary-color">2</span>
                  </p>
                  <p className="font-medium text-secondary-color">
                    Importe de los productos:{" "}
                    <span className="font-medium text-secondary-color text-right">
                      $123.00
                    </span>
                  </p>
                  <p className="font-medium text-secondary-color">
                    Gastos de envío:{" "}
                    <span className="font-medium text-secondary-color text-right">
                      -
                    </span>
                  </p>
                  <h4 className="text-secondary-color font-bold text-h4">
                    Total a pagar:{" "}
                    <span className="text-secondary-color font-bold text-h4">
                      $123.00
                    </span>
                  </h4>
                </div>
              </div>
              <button className="rounded-md bg-secondary-color text-white font-bold p-4 mt-4 ">
                Continuar con la compra
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 w-full md:w-1/2">
        <div className="bg-light-blue-color p-4">
          <h1 className="text-h3 text-secondary-color font-extrabold mb-4">
            Resumen de la compra
          </h1>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full h-auto">
              <p className="font-medium text-secondary-color">
                Cantidad de productos:{" "}
                <span className="font-medium text-secondary-color">2</span>
              </p>
              <p className="font-medium text-secondary-color">
                Importe de los productos:{" "}
                <span className="font-medium text-secondary-color text-right">
                  $123.00
                </span>
              </p>
              <p className="font-medium text-secondary-color">
                Gastos de envío:{" "}
                <span className="font-medium text-secondary-color text-right">
                  -
                </span>
              </p>
              <h4 className="text-secondary-color font-bold text-h4">
                Total a pagar:{" "}
                <span className="text-secondary-color font-bold text-h4">
                  $123.00
                </span>
              </h4>
            </div>
          </div>
          <button className="rounded-md bg-secondary-color text-white font-bold p-4 mt-4 ">
            Continuar con la compra
          </button>
        </div>
      </div>
      <div className="my-4" />
      <Footer />
    </>
  );
}

export default Cart;
