const NavBar = () => {
  return (
    <div className=" flex flex-col w-40 bg-slate-300 justify-center">
      <div className="flex flex-col ">
        <div
          className="
        cursor-pointer
border-none
text-lg
h-8
px-1 py-5
w-64
shadow
"
        >
          Mi Perfil
        </div>
        <div
          className="
        cursor-pointer
border-none
text-lg
h-8
px-1 py-8
w-64
shadow
"
        >
          Metodos de Pago
        </div>
        <div
          className="bg-transparent
        cursor-pointer
border-none
text-lg
h-8
px-1 py-5
w-64
shadow
"
        >
          Favoritos
        </div>
        <div
          className="bg-transparent
        cursor-pointer
border-none
text-lg
h-8
px-4 py-5
w-64
shadow
"
        >
          Carrito
        </div>
        <div
          className="bg-transparent
        cursor-pointer
border-none
text-lg
h-8
px-1 py-5
w-64
shadow
"
        >
          Cerrar sesion
        </div>
      </div>
    </div>
  );
};

export default NavBar;
