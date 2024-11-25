import { Outlet } from "react-router-dom";
import NavigationHeader from "../components/NavigationHeader";
import Sidebar from "../components/SideBar";
const AdminLayout = () => {
    return (
        <div className="flex row-auto">
            {/* <NavigationHeader /> */}
            {/* AdminLayout */}
            <nav>
                <Sidebar />
            </nav>
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
