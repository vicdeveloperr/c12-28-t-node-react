//import RegisterCompleted from "../Components/RegisterCompleted/RegisterCompleted"

const Login = () => {
    return (
    <>

        {/*<RegisterCompleted />*/}

 <div className="relative">
            <a className="bg-gray-600" href="">Inicio </a>
            <a href="">/ Login</a>

            <div className="border-black rounded-sm border-[2px] flex justify-center items-center ">
                <div className="w-[546px] h-[360px] bg-slate-600">
                    <img src="" alt="" />
                </div>
                <div>
                    <div className="bg-[#EEEBEB] pl-[64px] pr-[68px]">
                        <h2 className="text-center">Inicio de sesión</h2>

                        <div className="flex flex-col justify-center item-center">
                            <p className="pl-3">Usuario</p>
                            <input type="text" className="rounded-lg border-gray border-[1px]"/>
                            <h2 className="pl-3">Contraseña</h2>
                            <input type="text" className="rounded-lg border-gray border-[1px]"/>
                            <button className="bg-[#3A3A3A] border-[gray] border-[1px] rounded-full w-[149px] p-1 text-2xl text-white">Aceptar</button>
                        </div>
                            

                        <p>No tienes cuenta?</p>
                        <button className="bg-[#3A3A3A] border-[gray] border-[1px] rounded-full w-[149px] p-1 text-lg text-white">Registrate aquí</button>
                        <p>Olvidaste tu contraseña?</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[#D9D9D9] absolute bottom-0 w-full flex justify-center">
                <p>Lorem ipsum is placeholder  text commonly</p>
                <img src="" alt="" className="w-[211px] h-[57px]"/>
            </div>
    </>
    )
}

export default Login