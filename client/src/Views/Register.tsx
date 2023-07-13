const Register = () => {
    return (
        <>
        <div className="relative">

                <div className=" flex flex-col justify-center items-center mt-10">
                        <div className="w-[546px] h-[360px]">
                            <img src="https://img.freepik.com/foto-gratis/vista-superior-manos-escribiendo-teclado_23-2150281045.jpg?w=1380&t=st=1689219184~exp=1689219784~hmac=598e7fc1d7e01168a7529d18dedcc56d70e7804351ed0b3d9ff53614cdaa0f3a" alt="" />
                        </div>

                    <div className="w-[546px] h-[360px]">
                            <form className="bg-[#EEEBEB] flex flex-col gap-4 items-center pl-24 pr-24 pb-4">
                                
                                <h2 className="font-semibold text-xl mt-4">Crear cuenta</h2>
                                
                                <div className="flex flex-col items-center w-full">
                                    <label>Nombre Completo</label>
                                    <input type="text" className="rounded-lg border-gray border-[1px] w-full"/>
                                </div>

                                <div className="flex flex-col items-center w-full ">
                                    <label>Correo electrónico</label>
                                    <input type="text" className="rounded-lg border-gray border-[1px] w-full"/>
                                </div>

                                <div className="flex flex-col items-center w-full">
                                    <label>Contraseña</label>
                                    <input type="text" placeholder="Debe tener al menos 6 caracteres" className="rounded-lg border-gray border-[1px] w-full placeholder:text-[13.5px] placeholder:pl-3" />
                                </div>
                                
                                <div className="flex flex-col items-center w-full">
                                    <span>Vuelve a escribir la contraseña</span>
                                    <input type="text" className="rounded-lg border-gray border-[1px] w-full"/>
                                </div>

                                <button className="bg-[#3A3A3A] border-[gray] border-[1px] rounded-full w-[149px] p-1 text-2xl text-white ">Aceptar</button>
                            </form>
                    </div>
            </div>
        </div>


        <div className="bg-[#D9D9D9] absolute bottom-0 w-full flex justify-center">
                <p>Lorem ipsum is placeholder  text commonly</p>
            </div>
        </>
    )
}

export default Register
