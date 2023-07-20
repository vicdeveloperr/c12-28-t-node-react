import Button from "./Button";
import { Link } from 'react-router-dom';

export default function ProductCard() {

   
    return (
      <div className="rounded-md bg-white w-80 shadow-sm hover:bg-blue-100 text-left">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Auriculares en fondo amarillo"
          className="rounded-t-md"
        />
        <div className="flex flex-col p-4">
          <h5 className="text-primary-color font-medium">Categoría</h5>
          <h4 className="text-secondary-color font-bold text-h3">Auriculares</h4>
          <p className="font-light my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            tenetur esse aliquam asperiores numquam laboriosam omnis eius aut
            quisquam, minima labore voluptas ad! Quas ab in quaerat velit cumque
            repellendus!
          </p>
          <p className="font-medium text-secondary-color">
            10 Disponibles
          </p>
          <h6 className="text-secondary-color font-bold text-h4">
            $10.000
          </h6>
          <Link to= "/detail">
          <Button color="primary-color">Ver más</Button>
          </Link>
        </div>
      </div>
    );
  }






  