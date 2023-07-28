export default function Footer() {
  return (
    <footer className="bg-secondary-color p-16 flex flex-col gap-6">
      <div
        id="first-col"
        className="flex gap-4 justify-between flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8"
      >
        <div className="flex flex-col gap-2 w-[29ch]">
          <h3 className="text-lg text-white font-bold">MultiShop</h3>
          <p className="text-[#ddd] font-light">
            ¡Únete a la comunidad de Multishop y vive la emoción de comprar en
            línea de manera conveniente y asequible! Tu destino en línea para
            encontrar lo que buscas
          </p>
          <div id="social-net"></div>
        </div>
        <div className="flex flex-col gap-2 w-[29ch]">
          <h3 className="text-lg text-white font-bold">
            Información de Compañía
          </h3>
          <ul className="text-white">
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#">Carrera</a>
            </li>
            <li>
              <a href="#">Estamos contratando</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-[29ch]">
          <h3 className="text-lg text-white-color font-bold">
            Características
          </h3>
        </div>
        <div className="flex flex-col gap-2 w-[29ch]">
          <h3 className="text-lg text-white-color font-bold">Recursos</h3>
          <ul className="text-white-color">
            <li>
              <a href="">iOS & Android</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="second-col" className="border-t-2 py-4 w-full">
        <p className="text-center text-white-color flex items-center">
          <small>
            Developed by the <strong>t-node-react team</strong>
          </small>
        </p>
      </div>
    </footer>
  );
}
