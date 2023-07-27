export default function Button({ children, color, className }:{ children:string, color: "primary-color" | "primary-color-light" | "secondary-color-light" | "secondary-color", className?: string }) {
        return (
                <button className={`${className ? className : ""} rounded py-2 px-5 border border-${color} text-${color}`}>{children}</button>
        )
}