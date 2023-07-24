import Header from "../components/layouts/Header";
import Footer from "../components/common/Footer";
import ProductCard from "../components/common/ProductCard";

export default function Products() {
    return (
        <>
         <Header />
            <div className="mt-16  px-16">
                <div>
                    <h1 className="text-h3r text-secondary-color font-extrabold mb-4">Productos</h1>
                </div>
                <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="flex">
            <ProductCard />
          </div>
          <div className="flex">
            <ProductCard />
          </div>
          <div className="flex">
            <ProductCard />
          </div>
          <div className="flex">
            <ProductCard />
          </div>
          <div className="flex">
            <ProductCard />
          </div>

                </div>
            </div>
         <Footer />
        </>
    )
}