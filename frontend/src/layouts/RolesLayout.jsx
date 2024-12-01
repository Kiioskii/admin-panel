import { Outlet } from "react-router-dom";
const RolesLayout = () => {
    return (
        <div className="  bg-gray-100 flex-grow  min-h-screen p-4 ">
            <div className="w-full h-24 flex items-center justify-start ">
                <div className="flex row-auto w-10/12 border-3">
                    <div className="h-full w-1/3  flex items-center justify-start p-2 ">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pracownicy</h2>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default RolesLayout;
