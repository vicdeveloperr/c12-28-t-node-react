import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // try {
      const response = await axios.post('http://localhost:3001/auth/signin', {
        email, password 
      })
      console.log(response);
      if (response.statusText === 'OK') {
        const { token } = response.data;
        console.log(token);
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        navigate('/home')

      } else {
        alert('Datos de inicio de sesion incorrectos!')
        console.log('Error al iniciar la sesión');
      }

    // } catch (error) {
    //   console.log('Error al realizar la petición');
    // }
  }

  return (
    <>
      <NavBar />
      <div className="w-[346px] flex flex-col items-center py-10 m-auto">
        <img
          className="rounded-t-[15px] shadow-lg"
          src="https://images.unsplash.com/photo-1546432507-bd9e20b3c78b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />

        <div className="bg-white-color px-14 py-8 gap-6 flex flex-col items-center justify-center rounded-b-[15px] shadow-sm">
          <h2 className="text-center font-bold text-xl">Inicio de sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center item-center gap-2">
              <label>
                <h3 className="">Usuario</h3>
                <input
                  autoFocus
                  required
                  name="email"
                  type="email"
                  onChange={handleEmailChange}
                  className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                />
              </label>
              <label>
                <h3 className="mt-2">Contraseña</h3>
                <input
                  name="password"
                  required
                  type="text"
                  onChange={handlePasswordChange}
                  className="py-1 px-2 rounded-lg border-gray border-[1px] focus:outline-none"
                />
              </label>
              <button type="submit" className="bg-tertiary-color rounded-full p-2 text-lg text-white">
                Aceptar
              </button>
          fo</div>
          </form>
          <div className="flex gap-2 items-center">
            <p>No tienes cuenta?</p>
            <Link className="text-primary-color" to="/register">
              Registrate aquí
            </Link>
          </div>
          <p>Olvidaste tu contraseña?</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
