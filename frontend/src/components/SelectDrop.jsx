import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropList = ({ data, showIcons }) => {
    const [selectedOption, setSelectedOption] = useState(data[0]);
    const [showOptions, setShowOptions] = useState(false);

    console.log("data[0]", data[0]);
    console.log("selectedOption", selectedOption);

    const handleSelectOptions = (id) => {
        console.log("id,id", id);
        setShowOptions(false);
        const selected = data.find((item) => item.id === id);
        setSelectedOption(selected);
    };

    return (
        <div className="relative">
            <button
                onClick={() => {
                    setShowOptions((prev) => !prev);
                }}
                className="px-4 py-2 border gap-1 flex row-auto items-center text-gray-600 border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 focus:outline-none"
            >
                {selectedOption.text} {selectedOption.icon}
            </button>
            {showOptions && (
                <div className="absolute left-0 mt-2 w-30 bg-white border border-gray-300 rounded-md shadow-lg group-hover:block">
                    <ul className="py-1 text-sm text-gray-700">
                        {data.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleSelectOptions(item.id)}
                                className="px-4 py-2 gap-1 flex row-auto items-center hover:bg-gray-100 text-gray-600 cursor-pointer text-left"
                            >
                                {item.text}
                                {showIcons && item.icon}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropList;
