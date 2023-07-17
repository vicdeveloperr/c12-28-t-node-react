import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

export default function Register() {
  return (
    <>
      <NavBar />
      <div className="py-8 w-[346px] m-auto">
        <div className="rounded-sm flex flex-col justify-center items-center ">
          <img
            className="rounded-t-[15px] shadow-lg"
            src="https://images.unsplash.com/photo-1546432507-bd9e20b3c78b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />

          <div className="bg-white-color px-14 py-8 flex flex-col gap-6 items-center justify-center rounded-b-[15px] shadow-sm">
            <h2 className="text-center font-bold text-xl">Crear Cuenta</h2>
            <div className="flex flex-col justify-center item-center gap-2">
              <label>
                <h3>Nombre Completo</h3>
                <input
                  type="text"
                  required
                  className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                />
              </label>
              <label>
                <h3>Correo electrónico</h3>
                <input
                  type="text"
                  required
                  className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                />
              </label>
              <label>
                <h3>Contraseña</h3>
                <input
                  type="text"
                  placeholder="Debe tener al menos 6 caracteres"
                  required
                  className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                />
              </label>
              <label>
                <h3>Vuelve a escribir la contraseña</h3>
                <input
                  type="text"
                  required
                  className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                />
              </label>
              <small className="text-gray-500">
                Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso
                de Privacidad de Lorem Ipsum.
              </small>
              <button className="bg-tertiary-color rounded-full p-2 text-lg text-white">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}