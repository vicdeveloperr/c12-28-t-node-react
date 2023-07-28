import Button from "./Button";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  img,
  description,
  price,
  stock,
  category
}: {
  id: number;
  name: string;
  img?: string;
  description: string;
  price: number;
  stock: number;
  category: string
}) {
  return (
    <div className="rounded-md bg-white w-80 shadow-sm hover:bg-blue-100 text-left">
        <img
          src={
            img ||
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          }
          alt="Auriculares en fondo amarillo"
          className="rounded-t-md object-cover"
        />
      <div className="flex flex-col p-4">
        <h5 className="text-primary-color font-medium">{category}</h5>
        <h4 className="text-secondary-color font-bold text-h3">{name}</h4>
        <p className="font-light my-3">{description}</p>
        <p className="font-medium text-secondary-color">{stock} Disponibles</p>
        <h6 className="text-secondary-color font-bold text-h4">${price}</h6>
        <Link to={`/detail/${id}`}>
          <Button color="primary-color">Ver más</Button>
        </Link>
      </div>
    </div>
  );
}
