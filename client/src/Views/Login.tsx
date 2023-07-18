import { Link } from "react-router-dom";

import LogAndRegForm from "./LogAndRegForm";

const Login = () => {
  return (
    <LogAndRegForm>
      <div className="bg-white-color px-14 py-8 gap-6 flex flex-col items-center justify-center rounded-b-[15px] shadow-sm">
        <h2 className="text-center font-bold text-xl">Inicio de sesión</h2>
        <div className="flex flex-col justify-center item-center gap-2">
          <label>
            <h3 className="">Usuario</h3>
            <input
              type="text"
              className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
            />
          </label>
          <label>
            <h3 className="mt-2">Contraseña</h3>
            <input
              type="text"
              className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
            />
          </label>
          <button className="bg-primary-color rounded-md p-2 text-lg text-white">
            Aceptar
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <p>No tienes cuenta?</p>
          <Link className="text-primary-color" to="/register">
            Registrate aquí
          </Link>
        </div>
        <p>Olvidaste tu contraseña?</p>
      </div>
    </LogAndRegForm>
  );
};

export default Login;
