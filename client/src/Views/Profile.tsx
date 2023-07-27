import { create } from "zustand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useUserStore } from "../stateManagemet/useUserStore";

import Input from "../components/common/Input";
import SideBarNav from "../components/common/SideBarNav";
import Header from "../components/layouts/Header";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

import fotoUser from "../assets/foto-de-perfil.png";
import loadUserData from "../utils/loadUserData";

type perfilViewStore = {
  editMode: boolean;
  changeMode: (mode: "edit" | "noEdit") => void;
};
const usePerfilViewStore = create<perfilViewStore>()(set => ({
  editMode: false,
  changeMode: mode =>
    set(() => {
      if (mode === "edit") {
        return { editMode: true };
      } else {
        return { editMode: false };
      }
    }),
}));

type formUserPersonalDataStore = {
  inputUserCompleteName: string;
  inputUserLocation: string;
  inputUserPhoneNumber: string;
  inputUserCountry: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const useFormUserPersonalDataStore = create<formUserPersonalDataStore>()(
  set => ({
    inputUserCompleteName: "Juan Ramón Peréz Godoy",
    inputUserLocation: "Asunción - Paraguay",
    inputUserPhoneNumber: "(+595) 981 023 235",
    inputUserCountry: "Paraguay",
    onChangeInput: e =>
      set(state => {
        const input = e.target;
        const inputValue = input.value;
        switch (e.target.name) {
          case "userCompleteName":
            return { inputUserCompleteName: inputValue };
          case "userLocation":
            return { inputUserLocation: inputValue };
          case "userPhoneNumber":
            return { inputUserPhoneNumber: inputValue };
          case "userCountry":
            return { inputUserCountry: inputValue };
          default:
            return state;
        }
      }),
  })
);

function Profile() {
  const { userData } = useUserStore(state => state);

  const { editMode, changeMode } = usePerfilViewStore(state => state);
  const {
    inputUserCompleteName,
    inputUserCountry,
    inputUserLocation,
    inputUserPhoneNumber,
    onChangeInput,
  } = useFormUserPersonalDataStore(state => state);

  type typeSectionItemProps = {
    textLabel: string;
    inputId: string;
    inputName?: string;
    inputValue: string;
    inputDisable: boolean;
    inputType?: string | number;
    handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  function SectionItem({
    textLabel,
    inputId,
    inputName,
    inputValue,
    inputDisable,
    inputType,
    handler,
  }: typeSectionItemProps) {
    return (
      <div className="flex flex-wrap md:flex-nowrap my-3 w-full">
        <label
          htmlFor={inputId}
          className="font-bold md:w-[50%] md:border-b-[1.5px] md:py-2 md:border-b-solid md:border-b-secondary-color"
        >
          {textLabel}
        </label>
        <Input
          color="secondary-color"
          inputDisable={inputDisable}
          inputId={inputId}
          inputName={inputName ? inputName : inputId}
          value={inputValue}
          inputType={inputType}
          handler={handler}
        />
      </div>
    );
  }

  function Section({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <section
        className={`bg-secondary-color-light border-[1.5px] border-solid border-secondary-color rounded py-3 p-5 shadow-md shadow-secondary-color/50 ${
          className ? className : ""
        }`}
      >
        {children}
      </section>
    );
  }

  function UserPersonalDataSection() {
    

    if (!editMode) {
      return (
        <Section className="mt-5">
          <span className="flex text-h4 text-primary-color">
            <h4 className="font-bold mr-3">Datos personales</h4>
            <button title="Editar datos personales">
              <FontAwesomeIcon
                icon={faPen}
                onClick={() => changeMode("edit")}
              />
            </button>
          </span>
          <SectionItem
            inputDisable={true}
            textLabel="Nombre completo:"
            inputId="userCompleteName"
            inputValue={`${userData.firstName} ${userData.lastName}`}
          />
          <SectionItem
            inputDisable={true}
            textLabel="Dirección:"
            inputId="userLocation"
            inputValue="Asunción - Paraguay"
          />
          <SectionItem
            inputDisable={true}
            textLabel="Teléfono:"
            inputId="userPhoneNumber"
            inputValue={`${userData.phone}`}
            inputType="number"
          />
          <SectionItem
            inputDisable={true}
            textLabel="País:"
            inputId="userCountry"
            inputValue="Paraguay"
          />
        </Section>
      );
    } else {
      return (
        <Section className="mt-5">
          <span className="flex text-h4 text-primary-color">
            <h4 className="font-bold mr-3">Datos personales</h4>
            <button title="Editar datos personales">
              <FontAwesomeIcon icon={faPen} />
            </button>
          </span>
          <SectionItem
            inputDisable={false}
            textLabel="Nombre completo:"
            inputId="userCompleteName"
            inputValue={`${userData.firstName} ${userData.lastName}`}
            handler={e => onChangeInput(e)}
          />
          <SectionItem
            inputDisable={false}
            textLabel="Dirección:"
            inputId="userLocation"
            inputValue={inputUserLocation}
            handler={e => onChangeInput(e)}
          />
          <SectionItem
            inputDisable={false}
            textLabel="Teléfono:"
            inputId="userPhoneNumber"
            inputValue={inputUserPhoneNumber}
            handler={e => onChangeInput(e)}
            inputType="tel"
          />
          <SectionItem
            inputDisable={false}
            textLabel="País:"
            inputId="userCountry"
            inputValue={inputUserCountry}
            handler={e => onChangeInput(e)}
          />
          <Button color="secondary-color" className="bg-white-color">
            Actualizar
          </Button>
        </Section>
      );
    }
  }

  return (
    <>
      <Header />
      <SideBarNav />
      <Container>
        <main className="max-w-[850px] mx-auto">
          <h1 className="text-h2 text-center py-5 text-primary-color font-bold">
            Bienvenid@ {}
          </h1>
          {/* Contenedor de la sección datos de la cuenta y foto del usuario */}
          <div className="flex justify-between max-h-min">
            <div className="relative">
              <img
                className="hidden md:inline-block rounded aspect-square max-w-[180px] overflow-hidden mr-10 shadow-md shadow-secondary-color/50"
                src={fotoUser}
                alt="Foto de perfil"
              ></img>
              <button>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute bottom-4 right-0 w-28"
                />
              </button>
            </div>
            {/* Sección datos de la cuenta */}
            <Section className="w-full flex flex-col justify-center">
              <h4 className="text-h4 text-primary-color font-bold">
                Datos de la cuenta
              </h4>
              <SectionItem
                inputDisable={true}
                textLabel="Nombre de usuario:"
                inputId="userName"
                inputValue={userData.user}
              />
              <SectionItem
                inputDisable={true}
                textLabel="Correo electrónico:"
                inputId="userEmail"
                inputValue={userData.email}
              />
            </Section>
          </div>
          {/* Sección datos personales */}
          <UserPersonalDataSection />
        </main>
      </Container>
    </>
  );
}

export default Profile;