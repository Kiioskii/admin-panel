const IconButton = ({ handleClick, children }) => {
    return (
        <button
            className="flex items-center justify-center cursor-pointer w-10 h-10  shadow-md  border-2 rounded border-gray-200 hover:bg-gray-100"
            onClick={handleClick}
        >
            <div className="w-full h-full flex items-center justify-center text-gray-600">{children}</div>
        </button>
    );
};

export default IconButton;
