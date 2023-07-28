export default function Button({ children, color, className, onClick }:{ children: React.ReactNode, color: "primary-color" | "primary-color-light" | "secondary-color-light" | "secondary-color", className?: string, onClick?: () => void }) {
        return (
                <button onClick={onClick} className={`${className ? className : ""} rounded py-2 px-5 border border-${color} text-${color}`}>{children}</button>
        )
}