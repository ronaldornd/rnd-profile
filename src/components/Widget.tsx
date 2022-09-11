import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {

    return (
        <Popover className=' fixed bottom-4 right-4 flex flex-col items-end'>
            <Popover.Panel> <WidgetForm /> </Popover.Panel>
            <Popover.Button className="md:text-xl bg-green-700 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 text-3xl" />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500'>
                    <span className='pl-2 text-base'> Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    )
}