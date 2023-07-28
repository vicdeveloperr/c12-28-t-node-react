import Button from "./Button";
import React from "react";
import { CartItem, useCartStore } from "../../stateManagemet/useCartStore";


interface CartCardProps {
    cartItem: CartItem;
    removeFromCart: (productId: number) => void;
  }

 const CartCard: React.FC<CartCardProps> = ({ cartItem }) => {
    const { product, quantity } = cartItem;

    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const handleRemoveItem = () => {
      if(product.idProduct){
        removeFromCart(product.idProduct);
      }
    };

    return (
      <div className="rounded-md bg-white w-96 shadow-sm hover:bg-blue-100 text-left">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Auriculares en fondo amarillo"
          className="rounded-t-md"
        />
        <div className="flex flex-col p-4">
          <h4 className="text-secondary-color font-bold text-h4">{product.name}</h4>
          <p className="font-light my-3">
            {product.description}
          </p>
          <p className="font-medium text-secondary-color">Cantidad <span className="font-bold">{quantity}</span></p>
          <h6 className="text-secondary-color font-bold text-h4">${product.price}</h6>
          <Button color="primary-color" onClick={handleRemoveItem}>Eliminar</Button>
        </div>
      </div>
    );
  }
  export default CartCard

