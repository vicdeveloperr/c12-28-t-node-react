import logo from "../../assets/Checkmark.png"

const RegisterCompleted = () => {

    const data = [

        {
            imagen:logo, title: "Felicidades te has registrado satisfactoriamente, por favor no cierres"
        }
    ]

    return (
        <>

        {
            data.map((item,index) => (
                <div key={index} className="  flex flex-col justify-center items-center rounded-2xl ml-[148px] mr-[213px] bg-[#CBC9C9]">
                    <p className="text-[#0D1F13] text-[30px]">{item.title}</p>
                    <img src={item.imagen} alt="" />
                </div>
            ))
        }
        </>
    )
}
export default RegisterCompleted