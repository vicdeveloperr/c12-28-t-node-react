const NavBar = () => {
    return (
      <div className=' flex flex-col w-40 bg-slate-500 justify-center' >

        <div className='flex flex-col '>
        <div className='cursor-pointer p-2 my-2' >Mi Perfil</div>
        <div className='cursor-pointer p-2 my-2' >Metodos de Pago</div>
        <div className='cursor-pointer p-2 my-2' >Favoritos</div>
        <div className='cursor-pointer p-2 my-2' >Carrito</div>
        <div className='cursor-pointer p-2 my-2' >Cerrar sesion</div>
        </div>

      </div>
    );
  };
  
  export default NavBar;