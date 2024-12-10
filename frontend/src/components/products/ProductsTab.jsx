import { productsTabData } from "../../data/products/productsTab";
import { motion } from "framer-motion";

// import Badge from './Badge.jsx';

function Tab({ isSelected, onSelect, children }) {
    return (
        <li>
            <button
                className={` p-4 cursor-pointer rounded text-gray-500 bg-transparent flex text-center ${
                    isSelected ? "text-indigo-500 font-medium" : "text-gray-500 "
                }`}
                onClick={onSelect}
            >
                {children}
            </button>
            {isSelected && <motion.div layoutId="tab-indicator" className="border-2 rounded-lg border-indigo-500" />}
        </li>
    );
}

const ProductsTab = ({ selectedType, onSelectType, children }) => {
    return (
        <>
            <menu className="m-0 p-0 mb-4 gap-4 flex border-b border-gray-400">
                {productsTabData.map((item) => (
                    <Tab
                        key={item.id}
                        isSelected={selectedType === item.title}
                        onSelect={() => onSelectType(item.title)}
                    >
                        {item.title}
                    </Tab>
                ))}
            </menu>
            <div>{children}</div>
        </>
    );
};

export default ProductsTab;
