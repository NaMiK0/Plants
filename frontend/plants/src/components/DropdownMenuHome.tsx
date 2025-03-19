import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import {useState} from 'react'

interface DropdownMenuProps {
    setSortOrder: (order: "default" | "asc" | "desc") => void;
}


export default function DropdownMenuHome({setSortOrder}: DropdownMenuProps) {
    const [selectedOption, setSelectedOption] = useState("Default")
    const options: {label:string; value:"default" | "asc" | "desc";}[] = [
        { label: "Default", value: "default" },
        { label: "Ascending", value: "asc" },
        { label: "Descending", value: "desc" }
    ];


    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-gray-900  ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer">
                    Short by: {selectedOption}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in cursor-pointer"
            >
                <div className="py-1">
                    {options.map((option) => (
                        <MenuItem key={option.value}>
                            <button
                                className={`block w-full text-left px-4 py-2 text-sm`}
                                onClick={() => {
                                    setSortOrder(option.value)
                                    setSelectedOption(option.label)
                                }}
                            >
                                {option.label}
                            </button>


                            {/*{({active: active}) => (*/}
                            {/*    <a*/}
                            {/*        // href="#"*/}
                            {/*        className={`block px-4 py-2 text-sm text-gray-700 ${*/}
                            {/*            active ? 'bg-gray-100' : ''*/}
                            {/*        }`}*/}
                            {/*        onClick={() => setSelectedOption(option)}*/}
                            {/*    >*/}
                            {/*        <div className="flex items-center">*/}
                            {/*            <span className="flex-1">{option}</span>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*)}*/}
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    )
}