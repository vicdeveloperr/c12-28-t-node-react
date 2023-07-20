import type { typeColor } from "../../types/types";

function Input({ inputName, color, inputId, inputDisable, value }: { inputName: string, color: typeColor, inputId: string, inputDisable?: boolean, value?: string }) {
    let inputClass = `border-b-[1.5px] w-full border-solid border-${color} focus:outline-none bg-transparent py-2 text-${color}`
    if(inputDisable) {
        return (
            <input 
                value={value}
                id={inputId} 
                name={inputName} 
                disabled
                className={inputClass}
            />
        );
    }else {
        return (
            <input 
                value={value}
                id={inputId} 
                name={inputName} 
                className={inputClass}
            />
        );
    }
}

export default Input;