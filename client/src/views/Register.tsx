import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/common/TopBar";

export default function Register() {
  interface UserFormState {
    user: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }

  const navigate = useNavigate();

  const [userForm, setUserForm] = useState<UserFormState>({
    user: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userForm),
      });
      alert("Usuario dado de alta con exito");
      if (response.status === 200) {
        alert("Usuario dado de alta con exito");
        const data = await response.json();
        navigate("/login");
        console.log(data);
      } else {
        console.log("Error al dar de alta usuario");
      }
    } catch (error) {
      console.error("Error al realizar la petición", error);
    }
  };

  return (
    <>
      <TopBar />

      <div className="py-8 w-[346px] m-auto">
        <div className="rounded-sm flex flex-col justify-center items-center ">
          <img
            className="rounded-t-[15px] shadow-lg"
            src="https://images.unsplash.com/photo-1546432507-bd9e20b3c78b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />

          <div className="bg-white-color px-14 py-8 flex flex-col gap-6 items-center justify-center rounded-b-[15px] shadow-sm">
            <h2 className="text-center font-bold text-xl">Crear Cuenta</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center item-center gap-2">
                <label>
                  <h3>Nombre de Usuario</h3>
                  <input
                    autoFocus
                    name="user"
                    value={userForm.user}
                    type="text"
                    required
                    className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <h3>Email</h3>
                  <input
                    name="email"
                    value={userForm.email}
                    type="email"
                    minLength={5}
                    maxLength={30}
                    required
                    className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <h3>Nombre</h3>
                  <input
                    name="firstName"
                    value={userForm.firstName}
                    type="text"
                    maxLength={30}
                    required
                    className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <h3>Apellido</h3>
                  <input
                    name="lastName"
                    value={userForm.lastName}
                    type="text"
                    maxLength={30}
                    required
                    className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <h3>Contraseña</h3>
                  <input
                    name="password"
                    value={userForm.password}
                    type="password"
                    placeholder="Debe tener al menos 6 caracteres"
                    required
                    minLength={8}
                    maxLength={32}
                    autoComplete="on"
                    className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <h3>Vuelve a escribir la contraseña</h3>
                  <input
                    type="password"
                    required
                    className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                  />
                </label>
                <small className="text-gray-500">
                  Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso
                  de Privacidad de Lorem Ipsum.
                </small>
                <button
                  type="submit"
                  className="bg-tertiary-color rounded-full p-2 text-lg text-white"
                >
                  Aceptar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
