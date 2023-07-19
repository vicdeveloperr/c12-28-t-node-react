import type { typeColor } from "../../types/types";

function Input({ inputName, color, inputId }: {inputName: string, color: typeColor, inputId: string}) {
    return (
        <input 
            id={inputId} 
            name={inputName} 
            className={`border-b-[1.5px] w-full border-solid border-${color} focus:outline-none p-2 text-${color}`}
        />
    );
}

export default Input;