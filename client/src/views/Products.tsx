import Header from "../components/layouts/Header";
import Footer from "../components/common/Footer";
import ProductCard from "../components/common/ProductCard";

import { useProductStore } from "../stateManagemet/useProductStore";

export default function Products() {
  const products = useProductStore(state => state.searchProducts);
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
          {products.length !== 0 ? (
            products.map(product => (
              <ProductCard
                key={product.idProduct}
                id={product.idProduct}
                img={product?.photos[0]?.name}
                name={product.name}
                description={product.description}
                price={product.price}
                stock={product.stock}
              />
            ))
          ) : (
            <div>
              <div className="flex flex-col gap-2 w-[50ch] py-20">
                <h2 className="text-lg text-gray-800">
                  No se encontró ningún producto
                </h2>
                <p className="text-md text-gray-500">
                  Busca otros productos que están disponibles
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
