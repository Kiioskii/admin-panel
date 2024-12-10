const Button = ({ label, onClick, variant = "primary", disabled = false }) => {
    const baseStyles = "px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300";

    const variants = {
        primary: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300",
        secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300",
        gray: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200",
    };

    const disabledStyles = "opacity-50 cursor-not-allowed";

    return (
        <button
            className={`${baseStyles} ${disabled ? variants["gray"] : variants[variant]} ${
                disabled ? disabledStyles : ""
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
