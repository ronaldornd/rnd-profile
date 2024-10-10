import { CircleNotch } from "@phosphor-icons/react"

export function Loading(){
    return(
        <div className="w-6 h-6 flex items-center justify-center">
        <CircleNotch className="bold w-4 h-4 animate-spin"/>
        </div>
    )
}