import Header from "../components/layouts/Header";
import Footer from "../components/common/Footer";
import ProductCard from "../components/common/ProductCard";

import { useProductStore } from "../stateManagemet/useProductStore";

export default function Products() {
  const products = useProductStore(state => state.products);
  console.log(products);
  return (
    <>
      <Header />
      <div className="mt-16  px-16">
        <div>
          <h1 className="text-h3r text-secondary-color font-extrabold mb-4">
            Productos
          </h1>
        </div>
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products ? (
            products.map(product => (
              <ProductCard
                key={product.idProduct}
                id={product.idProduct}
                name={product.name}
                description={product.description}
                price={product.price}
                stock={product.stock}
              />
            ))
          ) : (
            <div>
              <h2>No se encontró ningún producto</h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
