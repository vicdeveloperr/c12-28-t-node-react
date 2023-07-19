import Button from "./Button";

export default function ProductCard() {
    return (
      <div className="rounded-md bg-white w-80 shadow-sm hover:bg-blue-100 text-left">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Auriculares en fondo amarillo"
          className="rounded-t-md"
        />
        <div className="flex flex-col gap-2 p-4">
            <h6 className="text-primary-color font-medium">Categoría</h6>
          <h4 className="text-gray-900 font-bold text-lg">Auriculares</h4>
          <p className="text-gray-600 font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            tenetur esse aliquam asperiores numquam laboriosam omnis eius aut
            quisquam, minima labore voluptas ad! Quas ab in quaerat velit cumque
            repellendus!
          </p>
          <small className="font-semibold">
            <strong>10 Disponibles</strong>
          </small>
          <p className="text-gray-900">
            <strong>$10.000</strong>
          </p>
          <Button>Ver más</Button>
        </div>
      </div>
    );
  }






  