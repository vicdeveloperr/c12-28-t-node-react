import type { typeColor } from "../../types/types";

type typeInputProps = { inputName: string, color: typeColor, inputId: string, inputDisable?: boolean, value?: string | number, inputType?: string | number, handler?: (e: React.ChangeEvent<HTMLInputElement>) => void };

function Input({ inputName, color, inputId, inputDisable, value, inputType, handler }: typeInputProps) {
    const inputClass = `border-b-[1.5px] w-full border-solid border-${color} focus:outline-none bg-transparent py-2 text-${color}`
    if(inputDisable) {
        return (
            <input 
                type={inputType && typeof inputType === "string" ? inputType : "text"}
                defaultValue={value}
                id={inputId} 
                name={inputName} 
                disabled
                className={inputClass}
            />
        );
    }else {
        return (
            <input 
                type={inputType && typeof inputType === "string" ? inputType : "text"}
                value={value}
                id={inputId} 
                name={inputName} 
                className={inputClass}
                onChange={handler}
            />
        );
    }
}

export default Input;
