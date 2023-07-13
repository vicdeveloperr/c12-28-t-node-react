const Register = () => {
    return (
        <>
        <div className="relative">
            <a className="bg-gray-600" href="">Inicio </a>
            <a href="">/ Crear cuenta</a>

            <div className="border-black rounded-sm border-[2px] flex justify-center items-center ">
                <div className="w-[546px] h-[360px] bg-slate-600">
                    <img src="" alt="" />
                </div>
                <div>
                    <div className="bg-[#EEEBEB]">
                        <h2>Crear cuenta</h2>
                        <p>Nombre Completo</p>
                        <input type="text" className="rounded-lg border-gray border-[1px]"/>
                        <h2>Correo electrónico</h2>
                        <input type="text" className="rounded-lg border-gray border-[1px]"/>
                        <h2>Contraseña</h2>
                        <input type="text" placeholder="Debe tener al menos 6 caracteres" className="rounded-lg border-gray border-[1px]" />
                        <h2>Vuelve a escribir la contraseña</h2>
                        <input type="text" className="rounded-lg border-gray border-[1px]"/>
                        <p>Al crear una cuenta, aceptas las Condiciones de Uso y
                        el Aviso de Privacidad de Lorem Ipsum.</p>
                        <button className="bg-[#3A3A3A] border-[gray] border-[1px] rounded-full w-[149px] p-1 text-2xl text-white">Aceptar</button>
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

export default Register
