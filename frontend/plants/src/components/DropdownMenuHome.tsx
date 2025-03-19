import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import {useState} from 'react'


export default function DropdownMenuHome() {
    const [selectedOption, setSelectedOption] = useState("Default sorting")
    const options = [
        'Default sorting',
        'Sort Ascending',
        'Sort Descending'
    ]


    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    Short by: {selectedOption}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    {options.map((option) => (
                        <MenuItem key={option}>
                            {({active}) => (
                                <a
                                    href="#"
                                    className={`block px-4 py-2 text-sm text-gray-700 ${
                                        active ? 'bg-gray-100' : ''
                                    }`}
                                    onClick={() => setSelectedOption(option)}
                                >
                                    <div className="flex items-center">
                                        <span className="flex-1">{option}</span>
                                        {selectedOption === option && (
                                            <CheckIcon className="h-5 w-5 text-green-500"/>
                                        )}
                                    </div>

                                </a>
                            )}
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    )
}