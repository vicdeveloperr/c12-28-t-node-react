export default function Button({ children, color }:{ children:string, color: "primary-color" | "primary-color-light" | "secondary-color-light" | "secondary-color" }) {
        return (
                <button className={`rounded py-2 px-5 border border-${color} text-${color} mt-10`}>{children}</button>
        )
}