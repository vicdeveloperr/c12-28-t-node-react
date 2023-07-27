import { Navbar } from "flowbite-react"

export default function UserProfile() {
  return (<section>
    <Navbar />
    <div>
      <h1>Bienvenido Usuario</h1>
      <div>
        <div>
          <img src="" alt="" />
          <div>
            <div>
            <h3>Datos de la Cuenta</h3>
            <label>
              Nombre de Usuario:
            </label>
            <p>nombre</p>
            </div>
            <div>
              <label>Correo Electrónico: </label>
              <p>correo</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Datos Personales</h3>
          <form>
            <label><p>Nombre Completo</p><input type="text" /></label>
            <div>
            <label><p>Dirección: </p><input type="text" /></label>
            <select>
              <option>Argentina</option>
              <option>Chile</option>
              <option>Uruguay</option>
              <option>Brazil</option>
              <option>Colombia</option>
              <option>Venezuela</option>
              <option>Perú</option>
            </select>
            </div> 
            <label><p>Teléfono</p><input type="text" /></label>
            <button type="submit">Guardar</button>           
          </form>
        </div>
      </div>
    </div>
  </section>)
}
