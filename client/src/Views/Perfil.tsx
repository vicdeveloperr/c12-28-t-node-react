import Input from "../components/common/Input";
import SideBarNav from "../components/common/SideBarNav";
import Header from "../components/layouts/Header";
import Container from "../components/common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import fotoUser from "../assets/foto-de-perfil.png"
import { usePerfilViewStore } from "../stateManagemet/stores";
import Button from "../components/common/Button";

function Perfil() {
    const { editMode, changeMode } = usePerfilViewStore(state => state)
    
    function SectionItem({ textLabel, inputId, inputName, inputValue, inputDisable }: { textLabel: string, inputId: string, inputName?: string, inputValue: string, inputDisable: boolean }) {
        return(
            <div className="flex flex-wrap md:flex-nowrap my-3 w-full">
                <label htmlFor={inputId} className="font-bold md:w-[50%] md:border-b-[1.5px] md:py-2 md:border-b-solid md:border-b-secondary-color">{textLabel}</label>
                <Input color="secondary-color" inputDisable={inputDisable} inputId={inputId} inputName={inputName ? inputName : inputId} value={inputValue} />
            </div>
        );
    }

    function Section({ children, className }: { children: React.ReactNode, className?: string }) {

        return(
            <section className={`bg-secondary-color-light border-[1.5px] border-solid border-secondary-color rounded py-3 p-5 shadow-md shadow-secondary-color/50 ${className ? className : ""}`}>
                {children}
            </section>
        );
    }

    function UserPersonalDataSection() {
        if(!editMode) {
            return (
                <Section className="mt-5">
                    <span className="flex text-h4 text-primary-color">
                        <h4 className="font-bold mr-3">Datos personales</h4>
                        <button title="Editar datos personales"><FontAwesomeIcon icon={faPen} onClick={() => editarDatosPersonales()} /></button>
                    </span>
                    <SectionItem inputDisable={true} textLabel="Nombre completo:" inputId="userCompleteName" inputValue="Juan Ramón Peréz Godoy" />
                    <SectionItem inputDisable={true} textLabel="Dirección:" inputId="userLocation" inputValue="Asunción - Paraguay" />
                    <SectionItem inputDisable={true} textLabel="Teléfono:" inputId="userPhoneNumber" inputValue="(+595) 981 023 235" />
                    <SectionItem inputDisable={true} textLabel="País:" inputId="userCountry" inputValue="Paraguay" />
                </Section>
            );
        }else {
            return(
                <Section className="mt-5">
                    <span className="flex text-h4 text-primary-color">
                        <h4 className="font-bold mr-3">Datos personales</h4>
                        <button title="Editar datos personales"><FontAwesomeIcon icon={faPen} onClick={() => editarDatosPersonales()} /></button>
                    </span>
                    <SectionItem inputDisable={false} textLabel="Nombre completo:" inputId="userCompleteName" inputValue="Juan Ramón Peréz Godoy" />
                    <SectionItem inputDisable={false} textLabel="Dirección:" inputId="userLocation" inputValue="Asunción - Paraguay" />
                    <SectionItem inputDisable={false} textLabel="Teléfono:" inputId="userPhoneNumber" inputValue="(+595) 981 023 235" />
                    <SectionItem inputDisable={false} textLabel="País:" inputId="userCountry" inputValue="Paraguay" />
                    <Button color="secondary-color" className="bg-white-color">Actualizar</Button>
                </Section>
            );
        }
    }

    return(
        <>
        <Header />
        <SideBarNav />
        <Container>
            <main className="max-w-[850px] mx-auto">
                <h1 className="text-h2 text-center py-5 text-primary-color font-bold">Bienvenid@ Juan</h1>
                {/* Contenedor de la sección datos de la cuenta y foto del usuario */}
                <div className="flex justify-between max-h-min">
                    <img className="hidden md:inline-block rounded aspect-square max-w-[180px] overflow-hidden mr-10 shadow-md shadow-secondary-color/50" src={fotoUser}></img>
                    {/* Sección datos de la cuenta */}
                    <Section className="w-full flex flex-col justify-center">
                        <h4 className="text-h4 text-primary-color font-bold">Datos de la cuenta</h4>
                        <SectionItem inputDisable={true} textLabel="Nombre de usuario:" inputId="userName" inputValue="juan_perez22" />
                        <SectionItem inputDisable={true} textLabel="Correo electrónico:" inputId="userEmail" inputValue="juan_perez@gmail.com" />
                    </Section>
                </div>
                {/* Sección datos personales */}
                <UserPersonalDataSection />
            </main>
        </Container>
        </>
    );

    function editarDatosPersonales() {
        changeMode("edit");
    }

}

export default Perfil;