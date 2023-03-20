import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {

    return (
        <Popover className=' fixed bottom-4 lg:left-3 right-4 flex flex-col items-end lg:items-start'>
            <Popover.Panel> <WidgetForm /> </Popover.Panel>
            <Popover.Button className="md:text-xl lg:bg-black bg-green-700 rounded-full p-2 text-white flex items-center group">
                <ChatTeardropDots className="text-3xl" />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500'>
                    <span className='pl-2 text-base 2xl:text-2xl'>Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    )
}