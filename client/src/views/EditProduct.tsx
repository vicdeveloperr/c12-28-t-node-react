import { useState } from "react";

import Header from "../components/layouts/Header";
import Footer from "../components/common/Footer";
import Input from "../components/common/Input";

import { useCategoriesStore } from "../stateManagemet/useCategoriesStore";
import { Product } from "../types/ProductType";
import { SERVER_URL } from "../utils/constants";
import SideBarNav from "../components/common/SideBarNav";

function Detail() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ image: any }>({
    image: null,
  });
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: {
      name: "",
    },
    topic_1: "",
    detail_1: "",
    photos: [{ name: "" }],
  });
  const categories = useCategoriesStore(state => state.categories);

  const setDefault = () => {
    setProduct({
      name: "",
      description: "",
      price: 0,
      stock: 0,
      category: {
        name: "",
      },
      topic_1: "",
      detail_1: "",
      photos: [{ name: "" }],
    });
    setIsSelected(false);
  };

  const handleUploadImage = file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "cloud_name",
      import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME
    );
    formData.append(
      "upload_preset",
      import.meta.env.VITE_REACT_APP_CLOUDINARY_PRESET_NAME
    );

    fetch(import.meta.env.VITE_REACT_APP_CLOUDINARY_API_BASE_URL, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.secure_url !== "") {
          const uploadedFileUrl = data.secure_url;
          setProduct({
            ...product,
            photos: [
              {
                name: uploadedFileUrl,
              },
            ],
          });
          alert("Imagen cargada");
          setIsSelected(false);
        } else {
          console.error("Public img not available");
        }
      })
      .catch(err => console.error(err));
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    const productCategory = categories.find(
      c => product.category.name === c.name
    );
    const idCategoryProduct = productCategory?.idCategory;
    const userSession = localStorage.getItem("user-storage");
    const userParsed = JSON.parse(userSession);
    const idUserProduct = userParsed.state.user.idUser;
    const userProduct = { ...product, idUserProduct, idCategoryProduct };
    console.log(userProduct);
    try {
      fetch(`${SERVER_URL}/products`, {
        method: "POST",
        body: JSON.stringify(userProduct),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.statusText === "OK") {
          setDefault();
          setIsSelected(false);
        } else {
          console.error(res.statusText);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <Header />
      <SideBarNav />
      <div className="p-16">
        <h1 className="text-h3 text-secondary-color font-extrabold mb-4">
          Vender producto
        </h1>
        <div className="flex">
          <div className="w-1/2 h-96 p-4">
            <div className="w-80 h-80 bg-gray-300 p-2 rounded-lg flex flex-col gap-4 justify-center">
              <p className="text-gray-800 text-center font-bold">
                Arrastra una imagen aquí
              </p>
              <p className="text-center">o</p>
              {isSelected && (
                <div className="flex flex-col gap-6">
                  <img
                    className="w-10 h-10 m-auto"
                    src={selectedImage.image}
                    alt=""
                  />
                  <div className="flex gap-6">
                    <button
                      className="rounded-md p-2 bg-secondary-color text-white font-bold"
                      onClick={() => handleUploadImage(selectedImage.image)}
                    >
                      Agregar imagen
                    </button>
                    <button
                      className="rounded-md p-4 bg-primary-color text-white font-bold"
                      onClick={() => {
                        setSelectedImage({ image: "" });
                        setIsSelected(false);
                      }}
                    >
                      Quitar imagen
                    </button>
                  </div>
                </div>
              )}
              <input
                className="rounded-md p-2 bg-secondary-color text-white font-bold"
                type="file"
                name="product-image"
                onChange={event => {
                  setIsSelected(true);
                  let img = event.target.files[0];
                  setSelectedImage({ image: img });
                  console.log(img);
                }}
              />
            </div>
          </div>

          <form
            className="w-1/2 p-4 bg-light-blue-color rounded-lg"
            onSubmit={handleOnSubmit}
          >
            <label htmlFor="product-name">
              <h2 className="text-h4 text-secondary-color font-extrabold">
                Nombre del producto
              </h2>
              <Input
                color="secondary-color"
                inputId="product-name"
                inputName="product-name"
                value={product.name}
                handler={e =>
                  setProduct({
                    ...product,
                    name: e.target.value,
                  })
                }
              />
            </label>
            <label htmlFor="product-price">
              <h2 className="text-h4 text-secondary-color font-extrabold mt-3">
                Precio
              </h2>
              <Input
                color="secondary-color"
                inputId="product-price"
                inputName="product-price"
                value={product.price}
                handler={e =>
                  setProduct({
                    ...product,
                    price: Number(e.target.value),
                  })
                }
              />
            </label>
            <label htmlFor="product-desc">
              <h2 className="text-h4 text-secondary-color font-extrabold mt-3">
                Descripción
              </h2>
              <Input
                color="secondary-color"
                inputId="product-desc"
                inputName="product-desc"
                value={product.description}
                handler={e =>
                  setProduct({
                    ...product,
                    description: e.target.value,
                  })
                }
              />
            </label>
            <label htmlFor="product-categ">
              <h2 className="text-h4 text-secondary-color font-extrabold mt-3">
                Categoría
              </h2>
              <Input
                color="secondary-color"
                inputId="product-categ"
                inputName="product-categ"
                value={product.category.name}
                handler={e =>
                  setProduct({
                    ...product,
                    category: { name: e.target.value },
                  })
                }
              />
              <h2 className="text-h4 text-secondary-color font-extrabold mt-3">
                Características
              </h2>
              <h4 className="text-h5 font-medium">
                Elije hasta 10 características
              </h4>
              <h4 className="text-h5 font-extrabold">Tipo 1</h4>
              <div className="flex gap-3">
                <label>
                  <h3>Tópico 1</h3>
                  <Input
                    color="secondary-color"
                    inputId="product-topic-1"
                    inputName="product-topic-1"
                    value={product.topic_1}
                    handler={e =>
                      setProduct({
                        ...product,
                        topic_1: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  <h3>Detalle 1</h3>
                  <Input
                    color="secondary-color"
                    inputId="product-detail-1"
                    inputName="product-detail-1"
                    value={product.detail_1}
                    handler={e =>
                      setProduct({
                        ...product,
                        detail_1: e.target.value,
                      })
                    }
                  />
                </label>
              </div>

              <h4 className="text-h5 font-extrabold mt-2">Tipo 2</h4>
              <div className="flex gap-3">
                <label>
                  <h3>Tópico 2</h3>
                  <Input
                    color="secondary-color"
                    inputId="product-topic-2"
                    inputName="product-topic-2"
                    value={product.topic_2}
                    handler={e =>
                      setProduct({
                        ...product,
                        topic_2: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  <h3>Detalle 2</h3>
                  <Input
                    color="secondary-color"
                    inputId="product-detail-2"
                    inputName="product-detail-2"
                    value={product.detail_2}
                    handler={e =>
                      setProduct({
                        ...product,
                        detail_2: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
            </label>
            <label htmlFor="product-stock">
              <h2 className="text-h4 text-secondary-color font-extrabold mt-3">
                Cantidad
              </h2>
              <Input
                color="secondary-color"
                inputId="product-stock"
                inputName="product-stock"
                value={product.stock}
                handler={e =>
                  setProduct({
                    ...product,
                    stock: e.target.value,
                  })
                }
              />
            </label>
            <button
              className="rounded-md bg-secondary-color text-white font-bold p-4 w-44 mt-3"
              type="submit"
            >
              Crear producto
            </button>
          </form>
        </div>
      </div>
      <div className="my-4" />
      <Footer />
    </section>
  );
}

export default Detail;
