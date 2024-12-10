import { Outlet } from "react-router-dom";
import TabComponent from "../components/ui/TabComponent";
import { useState } from "react";
const ClientsLayout = ({ name, data }) => {
    const [selectedType, seSelectedType] = useState(data[0].title);

    function handleSelectType(newType) {
        seSelectedType(newType);
    }

    return (
        <div className=" bg-gray-100 flex-grow  min-h-screen p-10 ">
            <div className=" flex-grow p-6 bg-white rounded-lg shadow-md min-h-screen ">
                <div className="w-full h-24 flex items-center justify-start ">
                    <div className="flex row-auto w-10/12">
                        <div className="h-full w-1/3  flex items-center justify-start p-2 ">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">{name}</h2>
                        </div>
                    </div>
                </div>
                <TabComponent onSelectType={handleSelectType} selectedType={selectedType} data={data} />
                <Outlet />
            </div>
        </div>
    );
};

export default ClientsLayout;
