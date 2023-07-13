//import RegisterCompleted from "../Components/RegisterCompleted/RegisterCompleted"

const Login = () => {
    return (
    <>

        {/*<RegisterCompleted />*/}


        <div className="rounded-sm flex flex-col justify-center items-center h-screen relative ">
                <div className="w-[546px] h-[360px] ">
                    <img className="rounded-t-[15px] shadow-lg" src="https://images.unsplash.com/photo-1546432507-bd9e20b3c78b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                </div>

                <div className="w-[546px]">
                    <div className="bg-[#EEEBEB] p-14 flex flex-col items-center justify-center rounded-b-[15px] shadow-lg">
                        <h2 className="text-center font-bold text-xl">Inicio de sesión</h2>
                            <div className="flex flex-col justify-center item-center mt-6">
                                <p className="text-center">Usuario</p>
                                <input type="text" className="rounded-lg border-gray border-[1px]"/>
                                <h2 className="text-center mt-2">Contraseña</h2>
                                <input type="text" className="rounded-lg border-gray border-[1px]"/>
                                <button className="mt-2 bg-[#1B3847] border-[gray] border-[1px] rounded-full p-1 text-lg text-white ml-2 mr-2">Aceptar</button>
                            </div>
                        <p className="mt-4">No tienes cuenta?</p>
                        <button className=" mt-2 bg-[#1B3847] border-[gray] border-[1px] rounded-full w-[149px] p-1 text-lg text-white">Registrate aquí</button>
                        <p className="mt-2">Olvidaste tu contraseña?</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#D9D9D9] absolute bottom-0 w-full flex justify-center">
                <p>Lorem ipsum is placeholder  text commonly</p>
            </div>
    </>
    )
}

export default Login