const NavBar = () => {
  return (
    <div className=" flex flex-col w-40 bg-slate-500 justify-center">
      <div className="flex flex-col ">
        <div
          className="bg-transparent
        cursor-pointer
border-none
text-base
h-8
px-1 py-5
w-64
shadow
rounded-lg"
        >
          Mi Perfil
        </div>
        <div
          className="bg-transparent
        cursor-pointer
border-none
text-base
h-8
px-1 py-5
w-64
shadow
rounded-lg"
        >
          Metodos de Pago
        </div>
        <div
          className="bg-transparent
        cursor-pointer
border-none
text-base
h-8
px-1 py-5
w-64
shadow
rounded-lg"
        >
          Favoritos
        </div>
        <div
          className="bg-transparent
        cursor-pointer
border-none
text-base
h-8
px-1 py-5
w-64
shadow
rounded-lg"
        >
          Carrito
        </div>
        <div
          className="bg-transparent
        cursor-pointer
border-none
text-base
h-8
px-1 py-5
w-64
shadow
rounded-lg"
        >
          Cerrar sesion
        </div>
      </div>
    </div>
  );
};

export default NavBar;
