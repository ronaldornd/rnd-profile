import { Popover } from "@headlessui/react";
import { X } from "@phosphor-icons/react"

export function CloseButton() {
    return (
        <Popover.Button className="mx-5 top-5 left-64 absolute text-zinc-400 hover:text-zinc-100">
            <X weight="bold" className="w-4 h-4" />
        </Popover.Button>
    )
}