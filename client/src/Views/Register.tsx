import LogAndRegForm from "./LogAndRegForm";

export default function Register() {
  const SERVER_URL = "http://localhost:3001/user";

  const onSubmit = event => {
    event.preventDefault();

    fetch(SERVER_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      referrerPolicy: "no-referrer",
      method: "POST",
      body: JSON.stringify("Hello world"),
    }).then(res => res.json());
  };

  return (
    <LogAndRegForm>
      <form
        className="bg-white-color px-14 py-8 flex flex-col gap-6 items-center justify-center rounded-b-[15px] shadow-sm"
        onSubmit={onSubmit}
        method="POST"
      >
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
            Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de
            Privacidad de Lorem Ipsum.
          </small>
          <button
            className="bg-primary-color rounded-md p-2 text-lg text-white"
            type="submit"
          >
            Aceptar
          </button>
        </div>
      </form>
    </LogAndRegForm>
  );
}