import { ComponentProps } from "react"

export type ButtonProps = ComponentProps<'button'>

export function Button (props: ButtonProps) {
    return (
        <button className="w-full text-white font-mono font-bold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none rounded-lg p-6" {...props}/>
    )
}
