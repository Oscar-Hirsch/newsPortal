import {useState} from "react";

type DropDownProps = {
    items:string[]
    isDropdownOpen:boolean
    setIsDropdownOpen:(boolean:boolean)=>void
    setCountry:(item:string)=>void

}
export default function Dropdown({items, isDropdownOpen, setIsDropdownOpen, setCountry}:DropDownProps) {
    const [selectedCountry, setSelectedCountry] = useState<string>("Land wählen...")

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleItemSelect = (item: string) => {
        setCountry(item)
        setSelectedCountry(item);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative items-center w-full">
            <label className="text-gray-600" >Land wählen:</label>

            <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between rounded-full border border-gray-300 bg-white text-gray-700 text-base cursor-pointer relative transition-all duration-200 ease-in-out hover:shadow-lg hover:border-blue-400 focus:border-blue-500 focus:shadow-lg focus:outline-none shadow-md min-h-[48px]"
            >
               <span className="flex-1">
                   {selectedCountry}
               </span>
                <span className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                   <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                       <path d="M4.5 6L8 9.5L11.5 6H4.5Z"/>
                   </svg>
               </span>

                {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-2xl shadow-xl z-20 overflow-hidden">
                        <ul className="py-2">
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                                    onClick={() => handleItemSelect(item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </button>
        </div>
    );
};