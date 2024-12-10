import { Outlet } from "react-router-dom";
import ProductsTab from "../components/products/ProductsTab";
import { useState } from "react";
const ProductsLayout = () => {
    const [selectedType, seSelectedType] = useState("Wszystkie");

    function handleSelectType(newType) {
        seSelectedType(newType);
    }

    return (
        <div className=" bg-gray-100 flex-grow  min-h-screen p-10 ">
            <div className=" flex-grow p-6 bg-white rounded-lg shadow-md min-h-screen ">
                <div className="w-full h-24 flex items-center justify-start ">
                    <div className="flex row-auto w-10/12">
                        <div className="h-full w-1/3  flex items-center justify-start p-2 ">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Produkty</h2>
                        </div>
                    </div>
                </div>
                <ProductsTab onSelectType={handleSelectType} selectedType={selectedType} />
                <Outlet />
            </div>
        </div>
    );
};

export default ProductsLayout;
